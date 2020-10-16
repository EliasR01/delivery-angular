import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { RESET_PASSWORD } from '../mutations/resetPassword';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REQUEST_RESET } from '../mutations/requestReset';
import { UPDATE_USER } from '../mutations/updateUser';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RequestResetResponse } from '../interfaces';
import { User } from '../types';
import pick from 'lodash.pick';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  isRecovering: Boolean = false;
  isCodeValid: Boolean = false;
  user: User;
  loading: Boolean = false;
  constructor(
    private apollo: Apollo,
    private dialog: MatDialog,
    private location: Location,
    private detector: ChangeDetectorRef
  ) {}

  form = new FormGroup({
    email: new FormControl(''),
    code: new FormControl(''),
  });

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  reset(): void {
    this.loading = true;
    this.apollo
      .mutate<RequestResetResponse>({
        mutation: REQUEST_RESET,
        variables: { email: this.form.value.email },
      })
      .toPromise()
      .then((res) => {
        console.log(res);
        this.isRecovering = true;
        this.user = res.data.requestReset.user;
        this.loading = false;
        this.detector.markForCheck();
      })
      .catch((err) => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data:
            'There was an error requesting the reset code, please try again later or contact our support team!',
        });
      });
  }

  verifyCode(): void {
    this.loading = false;
    this.apollo
      .mutate({
        mutation: RESET_PASSWORD,
        variables: { token: this.form.value.code },
      })
      .toPromise()
      .then((res) => {
        this.isCodeValid = true;
        this.isRecovering = false;
        this.detector.markForCheck();
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        this.dialog.open(DialogComponent, {
          data:
            'There was an error verifying the reset code, please try again later or contact our support team!',
        });
      });
  }

  changePassword() {
    console.log(this.user);
    const password = this.passwordForm.value.password;
    const confirm = this.passwordForm.value.confirmPassword;
    if (password === confirm) {
      this.loading = true;
      const data = pick(this.user, [
        'name',
        'username',
        'email',
        'address',
        'country',
        'type',
        'fileUrl',
      ]);
      const userData = { ...data, password };
      this.apollo
        .mutate({
          mutation: UPDATE_USER,
          variables: { where: { _id: this.user._id }, userData },
        })
        .toPromise()
        .then(() => {
          this.dialog.open(DialogComponent, {
            data: 'Password changed successfully',
          });
          this.location.go('/login');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
          this.dialog.open(DialogComponent, {
            data:
              'There was an error updating the password, please try again later or contact our support team!',
          });
        });
    } else {
      this.dialog.open(DialogComponent, {
        data: 'Confirm password must match!',
      });
    }
  }

  ngOnInit(): void {}
}
