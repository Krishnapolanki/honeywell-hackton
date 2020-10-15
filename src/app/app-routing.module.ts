import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuardService } from './shared/shared/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    //canActivate:[AuthGuardService]
  },
  {
    path: 'products',
    component: ProductListComponent,
    //canActivate:[AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
