import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { Order, Service, User } from '../types';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { BaseChartDirective } from 'ng2-charts';
import { GET_PRODUCTS_BY_IDS } from '../queries/getProductsById';
import {
  ProductDataResponse,
  DateArray,
  ServiceDataResponse,
  OrderDataResponse,
} from '../interfaces';
import { DialogComponent } from '../dialog/dialog.component';
import { ChartData } from 'chart.js';
import { GET_SERVICES } from '../queries/getServices';
import { GET_ORDERS_BY_USER } from '../queries/getOrdersByUser';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  constructor(
    private service: DashboardService,
    private router: Router,
    private apollo: Apollo,
    private dialog: MatDialog,
    private detector: ChangeDetectorRef
  ) {}
  userData: User;
  orders: Order[];
  services: Service[];
  isButtonVisible: Boolean;
  isBusiness: Boolean;
  loading: Boolean = false;
  chartData: ChartData;
  pendingOrders: Order[] = [];
  allOrdersMap: DateArray = {};
  pendingOrdersMap: DateArray = {};
  completedOrdersMap: DateArray = {};
  chartLabels: string[];
  completed: Boolean = false;

  editUserInfo(): void {
    this.router.navigate(['dashboard/profile']);
  }

  newOrder(): void {
    this.router.navigate(['dashboard/order']);
  }

  editService(serviceData: Service): void {
    this.service.editableService = serviceData;
    this.router.navigate(['dashboard/service']);
  }

  newService(): void {
    this.router.navigate(['dashboard/service']);
  }

  openOrder(order: Order): void {
    this.loading = true;
    this.apollo
      .query<ProductDataResponse>({
        query: GET_PRODUCTS_BY_IDS,
        variables: { products: { _id: order.products } },
      })
      .toPromise()
      .then((response) => {
        this.loading = false;
        this.dialog.open(OrderDialogComponent, {
          data: { order: order, products: response.data.getProductsById },
        });
      })
      .catch(() => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data:
            'There was an error querying the products, please contact the support team!',
        });
      });
  }

  ngOnInit(): void {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    if (this.service.userData.type === 'business') {
      this.isBusiness = true;
      this.apollo
        .query<ServiceDataResponse>({
          query: GET_SERVICES,
          variables: { userID: this.service.userId },
        })
        .subscribe((response) => {
          this.service.services = response.data.getServiceByUser;
          this.services = this.service.services;
          this.detector.markForCheck();
        });
    } else {
      this.isBusiness = false;
    }
    this.apollo
      .query<OrderDataResponse>({
        query: GET_ORDERS_BY_USER,
        variables: { userID: this.service.userId },
      })
      .subscribe((res) => {
        this.service.orders = res.data.getOrdersByUser;
        this.orders = this.service.orders;
        this.pendingOrders = this.orders.filter(
          (e) => e.status === 'In process'
        );
        const completedOrders = this.orders.filter(
          (e) => e.status === 'Completed'
        );

        months.forEach((value) => {
          this.allOrdersMap[value] = 0;
          this.pendingOrdersMap[value] = 0;
          this.completedOrdersMap[value] = 0;
        });
        this.orders.forEach((value) => {
          const month = Number(value.emited.toString().split('-')[1]);
          this.allOrdersMap[months[month - 1]] += 1;
        });
        this.pendingOrders.forEach((value) => {
          const month = Number(value.emited.toString().split('-')[1]);
          this.pendingOrdersMap[months[month - 1]] += 1;
        });

        completedOrders.forEach((value) => {
          const month = Number(value.emited.toString().split('-')[1]);
          this.completedOrdersMap[months[month - 1]] += 1;
        });
        this.completed = true;
        this.detector.markForCheck();
      });
    this.userData = this.service.userData;
    this.isButtonVisible = this.userData.type === 'customer';
    this.chartLabels = months;
  }
}
