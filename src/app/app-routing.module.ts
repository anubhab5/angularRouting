import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlwaysAuthGuardService } from './services/always-auth-guard.service';
import { LoginComponent } from './access/login/login.component';
import { RegisterUserComponent } from './access/register-user/register-user.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

const routes: Routes = [
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
    component: ProductViewComponent
  },
  {
    path: 'addProduct',
    component: ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
