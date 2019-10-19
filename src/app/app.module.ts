import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/common-layout/footer/footer.component';
import { HeaderComponent } from './components/common-layout/header/header.component';
import { HistoryComponent } from './components/users/history/history.component';
import { TransferMoneyComponent } from './components/users/transfer-money/transfer-money.component';
import { CreatePartnerComponent } from './components/users/create-partner/create-partner.component';
import { DetailUserComponent } from './components/users/detail-user/detail-user.component';
import { ManagerUserComponent } from './components/users/manager-user/manager-user.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    TransferMoneyComponent,
    CreatePartnerComponent,
    DetailUserComponent,
    ManagerUserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
