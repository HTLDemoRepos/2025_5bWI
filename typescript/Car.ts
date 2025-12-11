import { Maker } from "./Maker.ts";
import { Engine } from "./Engine.ts";

export class Car {
  constructor(
    private model: string,
    public make: string,
    private color: string,
    private engine: Engine,
    private maker: Maker
  ) {}

  getColor(): string {
    return this.color;
  }

  setColor(color: string): void {
    // lokale Variable
    let a = 9;
    this.color = color;
  }

  getEngine(): Engine | null {
    return this.engine;
  }
}
