import { initialProductState, ProductState } from '../product.classes';
import * as ProductActions from './product.action';

export function productReducer(
  state = initialProductState,
  action: ProductActions.All
): ProductState {
  switch (action.type) {
    case ProductActions.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
