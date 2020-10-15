import { Action } from '@ngrx/store';
import { Product } from '../product.classes';

export const LOAD_PRODUCTS = '[Products] Load';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Success';
export const LOAD_PRODUCTS_FAILURE = '[Products] Load Failure';

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
  constructor() {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductsFailure implements Action {
  readonly type = LOAD_PRODUCTS_FAILURE;
}

export type All = LoadProducts | LoadProductsSuccess | LoadProductsFailure;
