import { Product } from "./Product.ts";

export class Glasses implements Product {
  constructor(
    private strength: number,
    private preis: number,
    private name: string
  ) {}
  getPrice(): number {
    return this.preis;
  }

  getPreis(): number {
    return this.preis;
  }

  getName(): string {
    return this.name;
  }

  getStrength(): number {
    return this.strength;
  }
}
