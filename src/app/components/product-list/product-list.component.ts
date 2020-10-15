import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/shared/cart.classes';
import { ProductService } from 'src/app/shared/shared/product.service';
import { LoadProducts } from 'src/app/shared/store/products/state/product.action';
import { getProducts } from 'src/app/shared/store/products/state/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product>;
  constructor(private productService: ProductService, private store: Store) {
    this.products$ = this.store.select(getProducts);
  }

  ngOnInit() {
    //this.products$ = this.productService.getProducts();
    this.store.dispatch(new LoadProducts());
  }

  addToCart(p: Product) {}
}
