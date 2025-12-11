import { Car } from "./Car.ts";
import { Engine } from "./Engine.ts";

const engine: Engine = new Engine(100);
const car1: Car = new Car("i2", "bmw", "red", engine);

console.log(car1.getEngine()?.getHP());
