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
import { FormControl, FormGroup } from '@angular/forms';

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

  orderForm = new FormGroup({
    typeService: new FormControl(''),
  });

  constructor(
    private service: DashboardService,
    private apollo: Apollo,
    private detector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.typeServices = this.service.typeService;
    console.log(this.service.typeService);
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
