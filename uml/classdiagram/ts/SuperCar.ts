import { Car } from "./Car.ts";

export class SuperCar extends Car {
  private boostMode: boolean = false;

  constructor(brand: string, model: string, price: number) {
    super(brand, model, price);
  }

  setBoostMode(enabled: boolean): void {
    this.boostMode = enabled;
    if (enabled) {
      console.log("Boost mode activated!");
    } else {
      console.log("Boost mode deactivated!");
    }
  }
}
