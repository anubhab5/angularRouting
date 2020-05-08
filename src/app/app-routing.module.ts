import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlwaysAuthGuardService } from './auth-services/always-auth-guard.service';
import { LoginComponent } from './access/login/login.component';
import { RegisterUserComponent } from './access/register-user/register-user.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'viewProduct',
    component: ProductViewComponent,
    canActivate: [AlwaysAuthGuardService]
  },
  {
    path: 'addProduct',
    component: ProductAddComponent,
    canActivate: [AlwaysAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
