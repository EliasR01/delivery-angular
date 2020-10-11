import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { CREATE_SERVICE } from '../mutations/createService';
import { CREATE_PRODUCT } from '../mutations/createProduct';
import { UPDATE_SERVICE } from '../mutations/updateService';
import { TypeService } from '../types';
import { DialogComponent } from '../dialog/dialog.component';
import { ServiceDataResponse } from '../interfaces';
import { ProductDataResponse } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { Product } from '../types';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent implements OnInit {
  typeServices: [TypeService];
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(
    private service: DashboardService,
    private apollo: Apollo,
    private dialog: MatDialog,
    private location: Location
  ) {}

  products: Product[] = [];

  serviceForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    stock: new FormControl(0, [Validators.required]),
    price: new FormControl(0.0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  isButtonEnabled: boolean = false;
  isProductEnabled: boolean = this.serviceForm.valid;
  description: string = 'Description';

  toggleDescription(): void {
    if (this.serviceForm.value.typeService === 'Food') {
      this.description = 'Ingredients';
    } else {
      this.description = 'Description';
    }
  }

  addProduct(): void {
    if (
      this.products.find(
        (element) => element.name === this.productForm.value.name
      ) === undefined
    ) {
      this.products.push(this.productForm.value);
      this.resetForm('ProductForm');
      this.isButtonEnabled = true;
    } else {
      this.dialog.open(DialogComponent, {
        data: 'That name of product has been already added!',
      });
    }
  }

  removeProduct(value: Product): void {
    const index = this.products.indexOf(value);
    this.products.splice(index, 1);
    if (this.products.length == 0) {
      this.isButtonEnabled = false;
    }
  }

  submit(): void {
    const serviceData = {
      ...this.serviceForm.value,
      user: this.service.userData._id,
    };
    this.apollo
      .mutate<ServiceDataResponse>({
        mutation: CREATE_SERVICE,
        variables: {
          serviceData,
        },
      })
      .subscribe((res) => {
        if (res) {
          const productData = this.products.map((value) => {
            return {
              ...value,
              service: res.data.createService._id,
            };
          });
          this.apollo
            .mutate<ProductDataResponse>({
              mutation: CREATE_PRODUCT,
              variables: {
                productData,
              },
            })
            .subscribe((response) => {
              if (response) {
                const updateServiceData = {
                  ...serviceData,
                  products: response.data.createProduct.map((value) => {
                    return value._id;
                  }),
                };
                console.log(updateServiceData);
                this.apollo
                  .mutate<ServiceDataResponse>({
                    mutation: UPDATE_SERVICE,
                    variables: {
                      where: { _id: res.data.createService._id },
                      serviceData: updateServiceData,
                    },
                  })
                  .subscribe((res) => {
                    if (res) {
                      this.dialog.open(DialogComponent, {
                        data: 'Service successfully created!',
                      });
                      this.resetForm('ProductForm');
                      this.resetForm('ServiceForm');
                      this.products = [];
                    }
                  });
              }
            });
        }
      });
  }

  resetForm(form: string): void {
    if (form === 'ProductForm') {
      this.productForm.controls['name'].setValue('');
      this.productForm.controls['stock'].setValue(0);
      this.productForm.controls['price'].setValue(0.0);
      this.productForm.controls['description'].setValue('');
    } else if (form === 'ServiceForm') {
      this.serviceForm.reset();
    }
  }

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.typeServices = this.service.typeService;
  }
}
