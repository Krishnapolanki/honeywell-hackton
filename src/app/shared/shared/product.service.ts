import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './cart.classes';

@Injectable({ providedIn: 'root' })
export class ProductService {
  p: Product[];
  constructor() {
    this.p = [
      {
        id: 1,
        name: 'Laptop',
        price: 3000,
      },
      {
        id: 1,
        name: 'Laptop',
        price: 3000,
      },
      {
        id: 2,
        name: 'Mobile',
        price: 2000,
      },
      {
        id: 3,
        name: 'Tablet',
        price: 4500,
      },
      {
        id: 4,
        name: 'Camera',
        price: 5300,
      },
    ];
  }

  getProducts(): Observable<Product[]> {
    return of(this.p);
  }
}
