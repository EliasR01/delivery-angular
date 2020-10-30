import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../types';
import { CREATE_ORDER } from '../mutations/createOrder';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { DialogComponent } from '../dialog/dialog.component';
import { GET_ORDERS_BY_USER } from '../queries/getOrdersByUser';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss'],
})
export class TakeOrderComponent implements OnInit {
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;
  @Input() orderData: any;
  @Output() return = new EventEmitter();
  description: string;
  selectedProducts: any = [];
  userInformation: User;
  orderProduct: any;
  today: number = Date.now();
  changeAddress: boolean = true;
  price: number = 0;
  disableSubmit: boolean = true;
  bill: boolean = false;
  loading: boolean = false;
  file: any;

  constructor(
    private service: DashboardService,
    private apollo: Apollo,
    private dialog: MatDialog
  ) {
    this.userInformation = this.service.userData;
  }

  productForm = new FormGroup({
    address: new FormControl(
      { value: '', disabled: this.changeAddress },
      Validators.required
    ),
  });
  back(): void {
    this.return.emit(false);
  }

  enableInput(): void {
    this.changeAddress = !this.changeAddress;
    this.productForm.controls['address'].reset({
      value: this.userInformation.address,
      disabled: this.changeAddress,
    });
  }

  ngOnInit(): void {
    this.productForm.controls['address'].setValue(this.userInformation.address);
    if (this.orderData.service.type === 'Food') {
      this.description = 'Ingredients';
    } else {
      this.description = 'Description';
    }
  }

  addProduct(event: any, product: any, amount: any, checkbox: any): void {
    const productData = { ...product, amount: amount.value };
    if (!checkbox.checked) {
      const index = this.containsProduct(productData.name);
      this.selectedProducts.splice(index, 1);
      checkbox.checked = false;
      amount.disabled = false;
    } else {
      if (this.containsProduct(product.name) >= 0) {
        checkbox.checked = true;
        amount.disabled = true;
      } else {
        if (amount.value === '0') {
          checkbox.checked = false;
        } else {
          if (event.checked) {
            amount.disabled = true;
            this.price = Number(
              (this.price + productData.price * productData.amount).toFixed(2)
            );
            this.selectedProducts.push(productData);
          } else {
            amount.disabled = false;
            this.price -= Number(
              (productData.price * productData.amount).toFixed(2)
            );
            this.selectedProducts = this.selectedProducts.filter(
              (value: any) => value._id !== productData._id
            );
          }
        }
        if (this.selectedProducts.length > 0) {
          this.disableSubmit = false;
        } else {
          this.disableSubmit = true;
        }
      }
    }
  }

  containsProduct(product: string): Number {
    for (let i = 0; i < this.selectedProducts.length; i++) {
      if (this.selectedProducts[i].name === product) {
        return i;
      }
    }
    return -1;
  }

  toggleBill(): void {
    this.bill = !this.bill;
  }

  async exportPdf(): Promise<any> {
    const template = document.getElementById('bill');
    return await html2canvas(template).then(async (canvas) => {
      try {
        const imgWidth = 200;
        // const pageHeight = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const xAxis = 2;
        const yAxis = 50;
        // const options = {
        //   size: '70px',
        //   background: '#fff',
        //   pagesplit: false
        // }
        const doc = new jsPDF();
        const image = canvas.toDataURL('image/png');
        doc.addImage(image, 'PNG', xAxis, yAxis, imgWidth, imgHeight);
        this.file = doc.output('blob');
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append('order', this.file);
        xhr.open('POST', 'http://localhost:4000/uploadFile');
        xhr.setRequestHeader('businessEmail', this.orderData.user.email);
        xhr.setRequestHeader('userEmail', this.userInformation.email);
        xhr.send(formData);
      } catch (err) {
        this.dialog.open(DialogComponent, {
          data: 'Something went wrong, please contact the support team',
        });
      }
    });
  }

  submit(): void {
    this.loading = true;
    this.exportPdf().then((value) => {
      const orderData = {
        address: this.productForm.value.address,
        emited: new Date().toDateString(),
        service: this.orderData.service._id,
        price: Number(this.price.toFixed(2)),
        status: 'In process',
        products: this.selectedProducts.map((data: any) => data._id),
        user: this.userInformation._id,
        business: this.orderData.user._id,
        fileUrl: value,
      };
      this.apollo
        .mutate({
          mutation: CREATE_ORDER,
          variables: {
            orderData,
          },
          refetchQueries: [
            {
              query: GET_ORDERS_BY_USER,
              variables: { userID: this.service.userData._id },
            },
          ],
        })
        .subscribe((response) => {
          try {
            // const params = {
            //   from_name: 'Delivery Service',
            //   subject: `Submited new order in ${this.orderData.service.name}`,
            //   message_html: document.getElementById('bill').innerHTML,
            //   content: this.file,
            // };
            // const templateParamsBussiness = {
            //   ...params,
            //   to: this.orderData.user.email,
            // };
            // this.service.sendEmail(templateParamsBussiness);
            // const templateParamsUser = {
            //   ...params,
            //   to: this.userInformation.email,
            // };
            // this.service.sendEmail(templateParamsUser);
            this.back();
            this.dialog.open(DialogComponent, {
              data: 'Order successfully loaded!',
            });
          } catch (err) {
            this.dialog.open(DialogComponent, {
              data: 'Something went wrong. Please contact the support team',
            });
          }
        });
    });
  }
}
