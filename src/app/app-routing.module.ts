import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/common-layout/footer/footer.component';
import { HeaderComponent } from './components/common-layout/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { TransferMoneyComponent } from './components/users/transfer-money/transfer-money.component';


const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
