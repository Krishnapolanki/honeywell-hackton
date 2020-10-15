import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart, Product } from './cart.classes';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _productsInCart = new BehaviorSubject<Cart>(null);
  productsInCart$ = this._productsInCart.asObservable();

  constructor() {}

  addProduct(product: Product) {
    this._productsInCart.pipe(
      map((p) => {
        p.products.push(product);
      })
    );
  }

  removeProduct(p: Product) {}

  updateProduct(p: Product) {}

  private updateTotalPrice() {}

  private calulateTotalQuantity(product: Product) {}
}
