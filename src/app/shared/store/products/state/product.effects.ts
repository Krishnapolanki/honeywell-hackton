import { map, switchMap, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProductActions from './product.action';
import { ProductService } from '../product.service';
import { Product } from '../product.classes';

@Injectable()
export class ProductEffects {
  @Effect()
  loadProduct: Observable<Action> = this.actions.pipe(
    ofType(ProductActions.LOAD_PRODUCTS),
    switchMap((action: ProductActions.LoadProducts) => {
      return this.productService.getProducts().pipe(
        take(1),
        map((products: Product[]) => {
          if (!!products) {
            return new ProductActions.LoadProductsSuccess(products);
          } else {
            return new ProductActions.LoadProductsFailure();
          }
        })
      );
    })
  );

  constructor(
    private actions: Actions,
    private productService: ProductService
  ) {}
}
