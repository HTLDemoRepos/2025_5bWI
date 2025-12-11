import { Vehicle } from "./Vehicle.ts";

export class Shop {
  private vehicles: Vehicle[];

  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles;
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  sellVehicle(vehicle: Vehicle): void {
    const index = this.vehicles.indexOf(vehicle);
    if (index > -1) {
      this.vehicles.splice(index, 1);
      console.log("Vehicle sold!");
    }
  }
}
