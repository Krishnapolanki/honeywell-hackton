import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { AuthStoreModule } from './shared/store/auth-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductStateModule } from './shared/store/products/products-state.module';
import { AuthModule } from './shared/store/auth/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    AuthModule,
    ProductStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
