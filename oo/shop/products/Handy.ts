import { Product } from "./Product.ts";

export class Handy implements Product {
  constructor(
    private model: string,
    private price: number,
    private color: string,
    private nic: string
  ) {}

  getName(): string {
    return `${this.model} (${this.color})`;
  }

  getModel(): string {
    return this.model;
  }

  getPrice(): number {
    return this.price;
  }
  getColor(): string {
    return this.color;
  }

  getNic(): string {
    return this.nic;
  }
}
