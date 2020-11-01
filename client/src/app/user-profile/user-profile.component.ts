import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard.service';
import { Apollo } from 'apollo-angular';
import { UPDATE_USER } from '../mutations/updateUser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataResponse } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  uploadPercent: Observable<number>;
  imageUrl: any;

  userForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    currentPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
  });

  constructor(
    private service: DashboardService,
    private apollo: Apollo,
    private router: Router,
    private dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.userForm.controls['name'].setValue(this.service.userData.name);
    this.userForm.controls['username'].setValue(this.service.userData.username);
    this.userForm.controls['email'].setValue(this.service.userData.email);
    this.userForm.controls['country'].setValue(this.service.userData.country);
    this.userForm.controls['type'].setValue(this.service.userData.type);
    this.userForm.controls['file'].setValue(this.service.userData.fileUrl);
    this.userForm.controls['address'].setValue(this.service.userData.address);
    this.imageUrl = this.userForm.value.file;
  }

  onChangeFile(event: any): void {
    const reader = new FileReader();
    this.userForm.controls['file'].setValue(event.target.files);
    reader.readAsDataURL(this.userForm.value.file[0]);
    reader.onload = () => {
      this.imageUrl = reader.result;
      console.log(this.imageUrl);
    };
  }

  update(): void {
    if (this.userForm.value.file != this.service.userData.fileUrl) {
      this.service.removeFile(this.service.userData.fileUrl);
      this.service
        .uploadFile(this.userForm.value.file[0], this.service.userData.username)
        .subscribe((e) => {
          e.ref.getDownloadURL().then((value) => {
            this.updateUser(value);
          });
        });
    } else {
      this.updateUser(this.service.userData.fileUrl);
    }
  }

  updateUser(fileUrl: string): void {
    const { currentPassword, ...filteredData } = this.userForm.value;
    const { file, ...data } = filteredData;
    const userData = {
      ...data,
      password: this.userForm.value.password,
      fileUrl: fileUrl,
    };
    this.apollo
      .mutate<UserDataResponse>({
        mutation: UPDATE_USER,
        variables: {
          where: { _id: this.service.userData._id },
          userData: userData,
          currentPassword: this.userForm.value.currentPassword,
        },
      })
      .toPromise()
      .then((response) => {
        if (response.data) {
          this.dialog.open(DialogComponent, {
            data: 'User updated successfully',
          });
          this.router.navigate(['dashboard/summary']);
          this.service.userData = response.data.updateUser;
        }
      })
      .catch((err) => {
        const error = err.message.split(':')[1];
        this.dialog.open(DialogComponent, { data: error });
      });
  }

  back(): void {
    this.location.back();
  }
}
