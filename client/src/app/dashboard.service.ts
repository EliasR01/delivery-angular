import { Injectable, NgZone } from '@angular/core';
import { TemplateParams } from './interfaces';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Order, TypeService, User } from './types';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  typeService: [TypeService];
  userData: User;
  orders: [Order];

  uploadFile(file: any, username: string): Observable<UploadTaskSnapshot> {
    const filePath = `RoomsImages/${username}-${Date.now()}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    const url = task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((fileUrl) => {
          return fileUrl;
        });
      })
    );

    return url;
  }

  sendEmail(templateParams: TemplateParams): void {
    emailjs.send(
      'delivery-app-service',
      'template_smXCjRxC',
      templateParams,
      'user_eJv2ZcvYpPAAY03vAk0sV'
    );
  }

  removeFile(fileUrl: string): void {
    this.storage.storage.refFromURL(fileUrl).delete();
  }

  constructor(private storage: AngularFireStorage, private zone: NgZone) {}
}
