import { GUI } from "./GUI.ts";
import { Products } from "./products/Products.ts";

export class GraficGUI implements GUI {
  private products: Products;
  constructor(products: Products) {
    this.products = products;
  }

  start(): void {
    console.log("This is the grafic gui");
  }
}
