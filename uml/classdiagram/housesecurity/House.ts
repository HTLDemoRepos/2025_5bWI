import { Securable } from "./Securable.ts";
import { Door } from "./Door.ts";
import { Window } from "./Window.ts";

export class House implements Securable {
  private doors: Door[];
  private windows: Window[];

  constructor(numberOfDoors: number, numberOfWindows: number) {
    this.doors = [];
    this.windows = [];

    for (let i = 0; i < numberOfDoors; i++) {
      this.doors.push(new Door());
    }

    for (let i = 0; i < numberOfWindows; i++) {
      this.windows.push(new Window());
    }
  }

  isSecured(): boolean {
    const doorsLocked = this.doors.every((door) => door.isLocked());
    const windowsLocked = this.windows.every((window) => window.isLocked());
    return doorsLocked && windowsLocked;
  }

  getSecurityStatus(): string {
    const doorsLocked = this.doors.filter((door) => door.isLocked()).length;
    const windowsLocked = this.windows.filter((window) =>
      window.isLocked()
    ).length;
    const allSecured = this.isSecured();

    return `House: ${doorsLocked}/${
      this.doors.length
    } doors locked, ${windowsLocked}/${this.windows.length} windows locked - ${
      allSecured ? "SECURED" : "NOT SECURED"
    }`;
  }

  lockAll(): void {
    this.doors.forEach((door) => door.lock());
    this.windows.forEach((window) => window.lock());
  }

  unlockAll(): void {
    this.doors.forEach((door) => door.unlock());
    this.windows.forEach((window) => window.unlock());
  }

  getDoors(): Door[] {
    return this.doors;
  }

  getWindows(): Window[] {
    return this.windows;
  }
}
