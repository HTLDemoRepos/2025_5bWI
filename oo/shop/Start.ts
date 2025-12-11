import { CommandLineGUI } from "./CommandLineGUI.ts";
import { GraficGUI } from "./GraphicGUI.ts";
import { GUI } from "./GUI.ts";
import { Car } from "./products/Car.ts";
import { Glasses } from "./products/Glasses.ts";
import { Handy } from "./products/Handy.ts";
import { Products } from "./products/Products.ts";

const products: Products = new Products([
  new Glasses(-2, 100, "Classic"),
  new Glasses(-3, 150, "Modern"),
  new Glasses(-1, 80, "Vintage"),
  new Car("Toyota", 20000),
  new Car("Honda", 22000),
  new Handy("iPhone 13", 999, "Black", "123-456"),
  new Handy("Galaxy S21", 799, "White", "789-012"),
]);
const gui: GUI = new GraficGUI(products);
gui.start();
