import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Apollo, QueryRef } from 'apollo-angular';
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
  serviceQuery: QueryRef<any>;
  productQuery: QueryRef<any>;
  userQuery: QueryRef<any>;

  orderForm = new FormGroup({
    typeService: new FormControl(''),
  });

  constructor(private service: DashboardService, private apollo: Apollo) {}

  ngOnInit(): void {
    this.typeServices = this.service.typeService;
    this.serviceQuery = this.apollo.watchQuery<ServiceDataResponse>({
      query: GET_SERVICES_BY_TYPE,
      variables: { type: '' },
    });
    this.productQuery = this.apollo.watchQuery<ProductDataResponse>({
      query: GET_PRODUCTS_BY_IDS,
      variables: { _id: { products: '' } },
    });
    this.userQuery = this.apollo.watchQuery<UserDataResponse>({
      query: GET_USER_BY_ID,
      variables: { data: { _id: '' } },
    });
  }

  selectType(): void {
    this.selectedType = true;

    this.serviceQuery
      .refetch({ type: this.orderForm.value.typeService })
      .then((res) => {
        this.servicesData = res.data.getServiceByType;
      });
  }

  onSelectService(data: any): void {
    this.selectedService = true;
    this.userQuery.refetch({ data: { _id: data.user } }).then((res) => {
      const productData = {
        _id: data.products,
      };
      this.productQuery
        .refetch({ products: { _id: productData } })
        .then((response) => {
          this.orderData = {
            service: data,
            user: res.data.getUserById,
            products: response.data.getProductsById,
          };
          this.takeOrder = true;
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
