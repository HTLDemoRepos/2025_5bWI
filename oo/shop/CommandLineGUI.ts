import { GUI } from "./GUI.ts";
import { Product } from "./products/Product.ts";
import { Products } from "./products/Products.ts";

export class CommandLineGUI implements GUI {
  private products: Products;
  constructor(products: Products) {
    this.products = products;
  }

  start(): void {
    while (true) {
      let selection: number = Number(prompt("show product (1)"));
      switch (selection) {
        case 1:
          console.log("list all glasses");
          const allProducts: Product[] = this.products.getProducts();
          for (let i = 0; i < allProducts.length; i++) {
            console.log(
              allProducts[i].getName() +
                " - Price: " +
                allProducts[i].getPrice()
            );
          }
          break;

        default:
          break;
      }
    }
  }
}
