import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { Order, Service, User } from '../types';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { BaseChartDirective } from 'ng2-charts';
import { GET_PRODUCTS_BY_IDS } from '../queries/getProductsById';
import { ProductDataResponse, DateArray } from '../interfaces';
import { DialogComponent } from '../dialog/dialog.component';
import { ChartData } from 'chart.js';

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
    private dialog: MatDialog
  ) {}
  userData: User;
  orders: Order[];
  services: Service[];
  isButtonVisible: Boolean;
  isBusiness: Boolean =
    this.service.userData.type === 'business' ? true : false;
  loading: Boolean = false;
  chartData: ChartData;
  pendingOrders: Order[] = [];
  allOrdersMap: DateArray = {};
  pendingOrdersMap: DateArray = {};
  completedOrdersMap: DateArray = {};
  chartLabels: string[];

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

  openOrder(order: Order): void {
    this.loading = true;
    this.apollo
      .query<ProductDataResponse>({
        query: GET_PRODUCTS_BY_IDS,
        variables: { products: order.products },
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

  editOrder(): void {}

  ngOnInit(): void {
    this.userData = this.service.userData;
    this.orders = this.service.orders;
    this.isButtonVisible = this.userData.type === 'customer';
    this.pendingOrders = this.orders.filter((e) => e.status === 'In process');
    const completedOrders = this.orders.filter((e) => e.status === 'Completed');
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

    months.forEach((value) => {
      this.allOrdersMap[value] = 0;
      this.pendingOrdersMap[value] = 0;
      this.completedOrdersMap[value] = 0;
    });

    this.orders.forEach((value) => {
      const month = value.emited.toString().split(' ')[1];
      this.allOrdersMap[month] += 1;
    });

    this.pendingOrders.forEach((value) => {
      const month = value.emited.toString().split(' ')[1];
      this.pendingOrdersMap[month] += 1;
    });

    completedOrders.forEach((value) => {
      const month = value.emited.toString().split(' ')[1];
      this.completedOrdersMap[month] += 1;
    });

    this.chartLabels = months;
    if (this.isBusiness) {
      this.services = this.service.services;
    }
  }
}
