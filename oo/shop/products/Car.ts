import { Product } from "./Product.ts";

export class Car implements Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  drive(): void {
    console.log(`Driving the car: ${this.name}`);
  }
}
