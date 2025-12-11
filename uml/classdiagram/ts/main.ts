import { Car } from "./Car.ts";
import { SuperCar } from "./SuperCar.ts";
import { Bike } from "./Bike.ts";
import { Shop } from "./Shop.ts";
import { GUI } from "./GUI.ts";

const car1 = new Car("Toyota", "Camry", 25000);
const car2 = new Car("Honda", "Civic", 22000);
const superCar = new SuperCar("Ferrari", "F8", 300000);
const bike1 = new Bike("Harley-Davidson", "Street 750", 7500);
const bike2 = new Bike("Yamaha", "YZF-R1", 17000);

const shop = new Shop([car1, car2, superCar, bike1, bike2]);
const gui = new GUI(shop);

gui.start();
