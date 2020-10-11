import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Apollo } from 'apollo-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order, Product } from '../types';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss'],
})
export class OrderDialogComponent implements OnInit {
  data: Order;
  products: Product[];
  isError: Boolean = false;

  statuses: any = [
    { value: 'In process', viewValue: 'In process' },
    { value: 'Completed', viewValue: 'Completed' },
    { value: 'Canceled', viewValue: 'Canceled' },
  ];

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private apollo: Apollo) {
    this.data = data.order;
    this.products = data.products;
    this.orderForm.controls['address'].setValue(this.data.address);
    this.orderForm.controls['status'].setValue(this.data.status);
  }

  orderForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}
}
