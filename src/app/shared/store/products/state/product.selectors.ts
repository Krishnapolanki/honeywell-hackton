import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product, ProductState } from '../product.classes';
export const productStateName = 'products';
export const getproductState = createFeatureSelector<Product>(productStateName);
export const getProducts = createSelector(
  getproductState,
  (products: ProductState) => products
);
