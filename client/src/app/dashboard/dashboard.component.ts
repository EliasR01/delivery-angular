import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
//import { GET_SERVICES } from '../queries/getServices';
import { GET_TYPE_SERVICE } from '../queries/getTypeServices';
import { GET_ORDERS_BY_USER } from '../queries/getOrdersByUser';
import {
  Route,
  OrderDataResponse,
  TypeServiceResponse,
  ServiceDataResponse,
} from '../interfaces';
import { Router } from '@angular/router';
import { NavItem } from '../interfaces';
import { DashboardService } from '../dashboard.service';
import { environment } from '../../environments/environment';
import jwt_decode from 'jwt-decode';
import { GET_SERVICES } from '../queries/getServices';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  clicked: boolean = false;
  route: Route;
  navItems: NavItem[];
  loading: boolean = false;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private service: DashboardService
  ) {
    const token = document.cookie.split('=')[1];
    const payload = jwt_decode(token);
    const userId = payload.userId._id;
    this.service.userId = userId;
    if (this.service.userData) {
      this.route =
        this.service.userData.type === 'customer'
          ? { name: 'New Order', route: 'order' }
          : { name: 'New Service', route: 'service' };

      this.navItems = [
        {
          displayName: 'Profile',
          iconName: 'recent_actors',
          route: 'profile',
        },
        {
          displayName: 'Summary',
          iconName: 'some',
          route: 'summary',
        },
        {
          displayName: this.route.name,
          iconName: 'some-icon',
          route: this.route.route,
        },
        {
          displayName: 'Logout',
          iconName: 'logout',
          route: '/login',
        },
      ];
    } else {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.loading = true;
    if (this.service.userData.type === 'bussiness') {
      this.apollo
        .query<ServiceDataResponse>({
          query: GET_SERVICES,
          variables: { userID: this.service.userId },
        })
        .subscribe((response) => {
          if (response.data) {
            this.service.services.push(response.data.getServiceByUser);
          }
        });
    }
    this.apollo
      .watchQuery<OrderDataResponse>({
        query: GET_ORDERS_BY_USER,
        variables: { userID: this.service.userId },
      })
      .valueChanges.subscribe((res) => {
        this.service.orders = res.data.getOrdersByUser;
      });
    this.apollo
      .query<TypeServiceResponse>({ query: GET_TYPE_SERVICE })
      .subscribe((res) => {
        this.service.typeService = res.data.getTypeOfService;
        this.router.navigate(['dashboard/summary']);
        this.loading = false;
      });
  }
}
