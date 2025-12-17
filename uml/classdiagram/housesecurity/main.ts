import { Car } from "./Car.ts";
import { House } from "./House.ts";
import { SecurityService } from "./SecurityService.ts";

const myCar = new Car(4);
const myHouse = new House(3, 8);

const securityService = new SecurityService();
securityService.addObject(myCar);
securityService.addObject(myHouse);

console.log("Initial status:");
securityService.checkAllSecurity();

console.log("Locking all car doors...");
myCar.lockAllDoors();

console.log("Locking all house doors and windows...");
myHouse.lockAll();

console.log("After locking:");
securityService.checkAllSecurity();

console.log(securityService.getSecurityReport());

console.log("Unlocking one car door...");
myCar.getDoors()[0].unlock();

console.log("Current status:");
securityService.checkAllSecurity();
