import { Product } from "./Product.ts";

export class Products {
  constructor(private products: Product[]) {}
  getProducts(): Product[] {
    return this.products;
  }
}
