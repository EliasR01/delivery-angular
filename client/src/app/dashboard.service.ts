import { Injectable } from '@angular/core';
import { TemplateParams } from './interfaces';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Order, TypeService, User, Service } from './types';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  typeService: TypeService[];
  userData: User;
  orders: Order[];
  userId: string;
  services: Service[];
  editableService: Service;

  uploadFile(
    file: any,
    username: string,
    fileType: string
  ): Observable<UploadTaskSnapshot> {
    let filePath: string;
    if (fileType === 'PDF') {
      filePath = `OrderImages/${username}-${new Date().toISOString()}`;
    } else if (filePath === 'IMAGE') {
      filePath = `ProfileImages/${username}-${new Date().toISOString()}`;
    }
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    const url = task.snapshotChanges().pipe(
      finalize(() => {
        return fileRef.getDownloadURL().subscribe((fileUrl) => {
          console.log(fileUrl);
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

  constructor(private storage: AngularFireStorage) {}
}
