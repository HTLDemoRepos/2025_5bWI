export class Engine {
  private hp: number;

  constructor(hp: number) {
    this.hp = hp;
  }

  getHP(): number {
    return this.hp;
  }
}
