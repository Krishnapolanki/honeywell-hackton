import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth/auth.module';
import { ProductStateModule } from './products/products-state.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, ProductStateModule],
})
export class AuthStoreModule {}
