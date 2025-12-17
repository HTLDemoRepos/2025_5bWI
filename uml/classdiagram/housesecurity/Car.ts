import { Securable } from "./Securable.ts";
import { Door } from "./Door.ts";

export class Car implements Securable {
  private doors: Door[];

  constructor(numberOfDoors: number) {
    this.doors = [];
    for (let i = 0; i < numberOfDoors; i++) {
      this.doors.push(new Door());
    }
  }

  isSecured(): boolean {
    return this.doors.every((door) => door.isLocked());
  }

  getSecurityStatus(): string {
    const allLocked = this.isSecured();
    const lockedCount = this.doors.filter((door) => door.isLocked()).length;
    return `Car: ${lockedCount}/${this.doors.length} doors locked - ${
      allLocked ? "SECURED" : "NOT SECURED"
    }`;
  }

  lockAllDoors(): void {
    this.doors.forEach((door) => door.lock());
  }

  unlockAllDoors(): void {
    this.doors.forEach((door) => door.unlock());
  }

  getDoors(): Door[] {
    return this.doors;
  }
}
