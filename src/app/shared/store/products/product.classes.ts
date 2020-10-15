export class Product {
  id: number;
  name: string;
  price: number;
}

export class ProductState {
  id: number;
  name: string;
  price: number;
}

export const initialProductState: ProductState = {
  id: 0,
  name: null,
  price: 0,
};
