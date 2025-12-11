import { Shop } from "./Shop.ts";
import { Vehicle } from "./Vehicle.ts";

export class GUI {
  private shop: Shop;

  constructor(shop: Shop) {
    this.shop = shop;
  }

  start(): void {
    let running = true;
    while (running) {
      console.log("\n--- Vehicle Shop ---");
      console.log("1. Show all vehicles");
      console.log("2. Add to cart");
      console.log("3. Exit");

      const choice = prompt("Enter your choice (1-3):");

      switch (choice) {
        case "1":
          this.showAllVehicles();
          break;
        case "2":
          this.addToCart();
          break;
        case "3":
          running = false;
          console.log("Thank you for visiting!");
          break;
        default:
          console.log("Invalid choice!");
      }
    }
  }

  private showAllVehicles(): void {
    const vehicles = this.shop.getVehicles();
    if (vehicles.length === 0) {
      console.log("No vehicles available.");
      return;
    }
    console.log("\n--- Available Vehicles ---");
    vehicles.forEach((vehicle, index) => {
      console.log(
        `${index + 1}. ${vehicle.getInfo()} - $${vehicle.getPrice()}`
      );
    });
  }

  private addToCart(): void {
    const choice = prompt("Enter vehicle number to add to cart:");
    const vehicles = this.shop.getVehicles();
    const vehicleIndex = Number(choice) - 1;

    if (vehicleIndex >= 0 && vehicleIndex < vehicles.length) {
      console.log(`Added ${vehicles[vehicleIndex].getInfo()} to cart!`);
    } else {
      console.log("Invalid vehicle selection!");
    }
  }
}
