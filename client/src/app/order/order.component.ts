import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Apollo } from 'apollo-angular';
import { GET_SERVICES_BY_TYPE } from '../queries/getServicesByType';
import { GET_PRODUCTS_BY_IDS } from '../queries/getProductsById';
import { GET_USER_BY_ID } from '../queries/getUserById';
import {
  ServiceDataResponse,
  ProductDataResponse,
  UserDataResponse,
} from '../interfaces';
import { GET_TYPE_SERVICE } from '../queries/getTypeServices';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeServiceResponse } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  typeServices: any;
  selectedType: boolean = false;
  selectedService: boolean = false;
  takeOrder: boolean = false;
  servicesData: any;
  orderData: any;
  loading: Boolean = false;

  orderForm = new FormGroup({
    typeService: new FormControl(''),
  });

  constructor(
    private service: DashboardService,
    private apollo: Apollo,
    private detector: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.typeServices = this.service.typeService;
    this.apollo
      .query<TypeServiceResponse>({ query: GET_TYPE_SERVICE })
      .toPromise()
      .then((res) => {
        this.typeServices = res.data.getTypeOfService;
        this.loading = false;
        this.detector.markForCheck();
      })
      .catch(() => {
        this.dialog.open(DialogComponent, {
          data: 'There was an error, please contact support team',
        });
      });
  }

  selectType(): void {
    this.selectedType = true;
    this.apollo
      .query<ServiceDataResponse>({
        query: GET_SERVICES_BY_TYPE,
        variables: { type: this.orderForm.value.typeService },
      })
      .subscribe((response) => {
        this.servicesData = response.data.getServiceByType;
        this.detector.markForCheck();
      });
  }

  onSelectService(data: any): void {
    this.loading = true;
    this.selectedService = true;

    this.apollo
      .query<UserDataResponse>({
        query: GET_USER_BY_ID,
        variables: { data: { _id: data.user } },
      })
      .subscribe((res) => {
        const productData = {
          _id: data.products,
        };
        this.apollo
          .query<ProductDataResponse>({
            query: GET_PRODUCTS_BY_IDS,
            variables: { products: productData },
          })
          .subscribe((response) => {
            this.orderData = {
              service: data,
              user: res.data.getUserById,
              products: response.data.getProductsById,
            };
            this.loading = false;
            this.takeOrder = true;
            this.detector.markForCheck();
          });
      });
  }

  toggleTakeOrder(status: boolean): void {
    this.takeOrder = status;
  }

  ngOnDestroy(): void {
    this.selectedType = false;
    this.selectedService = false;
  }
}
