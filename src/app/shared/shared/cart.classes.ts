export class Product {
  id: number;
  name: string;
  price: number;
}

export class Cart {
  id: number;
  products: Array<Product>;
  totalPrice: number;
  totalQuantity: number;
}

export class ProductListViewModel {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
