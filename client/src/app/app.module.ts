import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderComponent } from './order/order.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { DialogComponent } from './dialog/dialog.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BillComponent } from './bill/bill.component';

//Others
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';
//Angular Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UserProfileComponent,
    SummaryComponent,
    OrderComponent,
    AddServiceComponent,
    DialogComponent,
    TakeOrderComponent,
    OrderDialogComponent,
    LineChartComponent,
    BillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    TextFieldModule,
    MatDividerModule,
    ScrollingModule,
    MatCheckboxModule,
    MatProgressBarModule,
    ChartsModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
  ],
  providers: [
    {
      provide: BUCKET,
      useValue: 'delivery-app-73352.appspot.com',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
