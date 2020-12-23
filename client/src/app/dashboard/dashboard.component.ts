import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
//import { GET_SERVICES } from '../queries/getServices';
import { GET_TYPE_SERVICE } from '../queries/getTypeServices';
import { LOGOUT } from '../mutations/logout';
import { Route, TypeServiceResponse, UserDataResponse } from '../interfaces';
import { Router } from '@angular/router';
import { NavItem } from '../interfaces';
import { DashboardService } from '../dashboard.service';
import jwt_decode from 'jwt-decode';
import { GET_USER_BY_ID } from '../queries/getUserById';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  message: string;

  constructor(
    private apollo: Apollo,
    private router: Router,
    private service: DashboardService,
    private dialog: MatDialog,
    private detector: ChangeDetectorRef
  ) {}

  queryUserData(userId: string): void {
    this.loading = true;
    this.apollo
      .query<UserDataResponse>({
        query: GET_USER_BY_ID,
        variables: { data: { _id: userId } },
      })
      .toPromise()
      .then((response) => {
        this.service.userData = response.data.getUserById;
        this.setRoutes();
        this.detector.markForCheck();
        this.loading = false;
      })
      .catch(() => {
        this.message = 'Something went wrong, please contact the support team';
        this.dialog.open(DialogComponent, { data: this.message });
      });
  }

  setRoutes(): void {
    this.route =
      this.service.userData.type === 'customer'
        ? { name: 'New Order', route: 'order' }
        : { name: 'New Service', route: 'service' };

    this.navItems = [
      {
        displayName: 'Profile',
        iconName: 'recent_actors',
        route: 'profile',
        action: this.nothing.bind(this),
      },
      {
        displayName: 'Summary',
        iconName: 'some',
        route: 'summary',
        action: this.nothing.bind(this),
      },
      {
        displayName: this.route.name,
        iconName: 'some-icon',
        route: this.route.route,
        action: this.nothing.bind(this),
      },
      {
        displayName: 'Logout',
        iconName: 'logout',
        route: null,
        action: this.logout.bind(this),
      },
    ];
  }

  nothing(): void {
    null;
  }

  logout(): void {
    this.apollo
      .mutate({ mutation: LOGOUT })
      .toPromise()
      .then((res) => {
        if (res) {
          this.router.navigate(['login']);
        } else {
          this.dialog.open(DialogComponent, { data: 'Error loging out' });
        }
      })
      .catch(() => {
        this.dialog.open(DialogComponent, { data: 'Error loging out' });
      });
  }

  ngOnInit(): void {
    try {
      console.log(document.cookie);
      const token = document.cookie.split('=')[1];
      // console.log(`Token: ${token}`);
      const payload = jwt_decode(token);
      // console.log(`Payload: ${payload}`);
      const userId = payload.userId._id;
      // console.log(`User ID: ${userId}`);
      this.service.userId = userId;
      if (userId) {
        if (this.service.userData === undefined) {
          this.queryUserData(userId);
        } else {
          this.setRoutes();
        }
      } else {
        this.router.navigate(['login']);
      }
    } catch (err) {
      this.router.navigate(['login']);
    }
  }
}
