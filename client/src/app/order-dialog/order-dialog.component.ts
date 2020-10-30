import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UPDATE_ORDER } from '../mutations/updateOrder';
import { Order, Product } from '../types';
import pick from 'lodash.pick';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  data: Order;
  products: Product[];
  isError: Boolean = false;
  errorMessage: string;

  statuses: any = [
    { value: 'In process', viewValue: 'In process' },
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'Canceled', viewValue: 'Canceled' },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private apollo: Apollo,
    private dialogRef: MatDialogRef<OrderDialogComponent>
  ) {
    this.data = data.order;
    this.products = data.products;
    this.orderForm.controls['address'].setValue(this.data.address);
    this.orderForm.controls['status'].setValue(this.data.status);
  }

  orderForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  update(): void {
    const data = pick(this.data, [
      'business',
      'emited',
      'price',
      'products',
      'service',
      'user',
    ]);
    const withAddress = { ...data, address: this.orderForm.value.address };
    const orderData = { ...withAddress, status: this.orderForm.value.status };
    this.apollo
      .mutate({
        mutation: UPDATE_ORDER,
        variables: {
          where: { _id: this.data._id },
          orderData,
        },
      })
      .toPromise()
      .then(() => {
        this.isError = false;
        this.dialogRef.close();
      })
      .catch(() => {
        this.errorMessage = 'There was an error updating the order';
        this.isError = true;
      });
  }

  ngOnInit(): void {}
}
