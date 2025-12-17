import { Lockable } from "./Lockable.ts";

export class Door implements Lockable {
  private locked: boolean = false;

  constructor() {
    this.locked = false;
  }

  lock(): void {
    this.locked = true;
    console.log("Door locked");
  }

  unlock(): void {
    this.locked = false;
    console.log("Door unlocked");
  }

  isLocked(): boolean {
    return this.locked;
  }
}
