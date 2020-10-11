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
    if (this.containsProduct(product.name)) {
      checkbox.checked = true;
      amount.disabled = true;
    } else {
      if (amount.value === '0') {
        checkbox.checked = false;
      } else {
        const productData = { ...product, amount: amount.value };
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

  containsProduct(product: string): Boolean {
    for (let i = 0; i < this.selectedProducts.length; i++) {
      if (this.selectedProducts[i].name === product) {
        return true;
      }
    }
    return false;
  }

  toggleBill(): void {
    this.bill = !this.bill;
  }

  submit(): void {
    const orderData = {
      address: this.productForm.value.address,
      emited: new Date().toDateString(),
      service: this.orderData.service._id,
      price: Number(this.price.toFixed(2)),
      status: 'In process',
      products: this.selectedProducts.map((data: any) => data._id),
      user: this.userInformation._id,
      bussiness: this.orderData.user._id,
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
        if (response.data) {
          const params = {
            from_name: 'Delivery Service',
            subject: `Submited new order in ${this.orderData.service.name}`,
            message_html: `<div><h2>Order</h2><span><b>Customer: </b>${
              this.userInformation.name
            }</span><span><b>Bussiness: </b>${
              this.orderData.user.username
            }</span><span><b>Address: </b>${
              this.productForm.value.address
            }</span><span><b>Emited: </b>${new Date().toDateString()}</span>
            <h2>Products</h2>
            <div>${this.selectedProducts.map(
              (product: any) =>
                `<span><b>Product: </b>${product.name}</span><span><b>Price: </b>${product.price}</span><span><b>Amount: </b>${product.amount}</span>`
            )}</div><span><b>Total price: </b>${this.price}</div>`,
          };
          const templateParamsBussiness = {
            ...params,
            to_name: this.orderData.user.name,
          };
          this.service.sendEmail(templateParamsBussiness);
          const templateParamsUser = {
            ...params,
            to_name: this.userInformation.name,
          };
          this.service.sendEmail(templateParamsUser);
          this.back();
          this.dialog.open(DialogComponent, {
            data: 'Order successfully loaded!',
          });
        }
      });
  }
}
