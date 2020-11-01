import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CREATE_USER } from '../mutations/createUser';
import { UserType, UserDataResponse } from '../interfaces';
import { User } from '../types';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import pick from 'lodash.pick';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  types: UserType[] = [
    { value: 'customer', viewValue: 'Customer' },
    { value: 'business', viewValue: 'Business' },
  ];

  imageUrl: any = '../../assets/logo.jpg';
  loading: boolean = false;

  userData: User;

  userForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor(
    private apollo: Apollo,
    private router: Router,
    private service: DashboardService,
    private dialog: MatDialog
  ) {}

  onChangeFile(event: any): void {
    const reader = new FileReader();
    this.userForm.controls['file'].setValue(event.target.files);
    reader.readAsDataURL(this.userForm.value.file[0]);
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
  }

  register(): void {
    if (this.imageUrl != '../../assets/logo.jpg') {
      this.loading = true;

      this.service
        .uploadFile(this.userForm.value.file[0], this.userForm.value.username)
        .toPromise()
        .then((e) => {
          this.loading = true;
          e.ref.getDownloadURL().then((value) => {
            const data = pick(this.userForm.value, [
              'name',
              'username',
              'email',
              'password',
              'country',
              'type',
              'address',
            ]);
            const userData = {
              ...data,
              fileUrl: value,
            };
            this.apollo
              .mutate<UserDataResponse>({
                mutation: CREATE_USER,
                variables: { userData: userData },
              })
              .toPromise()
              .then((response) => {
                if (response.data) {
                  this.loading = false;
                  this.dialog.open(DialogComponent, {
                    data: 'Úser registered successfully',
                  });
                  this.service.userData = response.data.createUser;
                  this.router.navigate(['dashboard']);
                }
              })
              .catch(() => {
                this.loading = false;
                this.service.removeFile(value);
                this.dialog.open(DialogComponent, {
                  data:
                    'Something went wrong creating the user, please contact the support team',
                });
              });
          });
        })
        .catch(() => {
          this.loading = false;
          this.dialog.open(DialogComponent, {
            data:
              'Something went wrong loading the image, please contact the support team',
          });
        });
    } else {
      this.dialog.open(DialogComponent, { data: 'Must load a profile photo!' });
    }
  }

  ngOnInit(): void {}
}
