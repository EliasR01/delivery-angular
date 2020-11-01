import { Component, OnInit } from '@angular/core';
import { UserDataResponse, LoginResponse } from '../interfaces';
import { GET_USER_BY_ID } from '../queries/getUserById';
import { LOGIN } from '../mutations/login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { setAccessToken } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  openDialog: boolean = false;
  message: string;
  loading: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private router: Router,
    private apollo: Apollo,
    private service: DashboardService,
    private dialog: MatDialog
  ) {}

  login(): void {
    this.loading = true;
    this.apollo
      .mutate<LoginResponse>({
        mutation: LOGIN,
        variables: {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password,
        },
      })
      .toPromise()
      .then((response) => {
        if (response.data.login.accessToken) {
          setAccessToken(response.data.login.accessToken);
          this.apollo
            .query<UserDataResponse>({
              query: GET_USER_BY_ID,
              variables: { data: { _id: response.data.login.user._id } },
            })
            .toPromise()
            .then((res) => {
              if (res.data.getUserById) {
                this.service.userData = res.data.getUserById;
                this.router.navigate(['dashboard/summary']);
              } else {
                this.message =
                  'Something went wrong, please contact the support team';
                this.dialog.open(DialogComponent, { data: this.message });
              }
              this.loading = false;
            });
        }
      })
      .catch((err) => {
        this.loading = false;
        const error = err.message.split(':')[1];
        this.dialog.open(DialogComponent, {
          data: error,
        });
      });
  }

  ngOnInit(): void {}
}
