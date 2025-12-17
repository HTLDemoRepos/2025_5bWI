import { Lockable } from "./Lockable.ts";

export class Window implements Lockable {
  private locked: boolean = false;

  constructor() {
    this.locked = false;
  }

  lock(): void {
    this.locked = true;
    console.log("Window locked");
  }

  unlock(): void {
    this.locked = false;
    console.log("Window unlocked");
  }

  isLocked(): boolean {
    return this.locked;
  }
}
