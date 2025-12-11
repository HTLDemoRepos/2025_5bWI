import { Vehicle } from "./Vehicle.ts";

export class Car implements Vehicle {
  private brand: string;
  private model: string;
  private price: number;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  drive(): void {
    console.log(`Driving ${this.brand} ${this.model}`);
  }

  doBreak(): void {
    console.log(`Braking ${this.brand} ${this.model}`);
  }

  getInfo(): string {
    return `${this.brand} ${this.model}`;
  }

  getPrice(): number {
    return this.price;
  }
}
