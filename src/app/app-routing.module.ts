import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/common-layout/footer/footer.component';
import { HeaderComponent } from './components/common-layout/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { TransferMoneyComponent } from './components/users/transfer-money/transfer-money.component';
import { HomeComponent } from './components/users/home/home.component';
import { HistoryComponent } from './components/users/history/history.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "home", redirectTo: 'home' },
  { path: "login", component: LoginComponent },
  { path: "login", redirectTo: 'login' },
  { path: "footer", component: FooterComponent },
  { path: "footer", redirectTo: 'footer' },
  { path: "header", component: HeaderComponent },
  { path: "header", redirectTo: 'header' },
  { path: "register", component: RegisterComponent },
  { path: "register", redirectTo: 'register' },
  { path: "transfer", component: TransferMoneyComponent },
  { path: "transfer", redirectTo: 'transfer' },
  { path: "history", component: HistoryComponent },
  { path: "history", redirectTo: 'history' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
