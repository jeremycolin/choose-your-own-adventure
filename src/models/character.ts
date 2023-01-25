export type Profession = "journalist" | "detective" | "gangster";

const roll = (base = 100) => Math.floor(Math.random() * base) + 1;

const droll =
  (dice: number) =>
  (base = 100) =>
    Array.from({ length: dice }, () => roll(base)).reduce((sum, curr) => sum + curr, 0);

export type Characteristic = "strength" | "constitution" | "power" | "dexterity" | "appearance" | "size" | "intelligence" | "education";

export class Character {
  public strength: number;
  public constitution: number;
  public power: number;
  public dexterity: number;
  public appearance: number;
  public size: number;
  public intelligence: number;
  public education: number;

  public hitPoints: number;
  public luck: number;

  constructor({
    strength,
    constitution,
    power,
    dexterity,
    appearance,
    size,
    intelligence,
    education,
  }: {
    strength: number;
    constitution: number;
    power: number;
    dexterity: number;
    appearance: number;
    size: number;
    intelligence: number;
    education: number;
  }) {
    this.strength = strength;
    this.constitution = constitution;
    this.power = power;
    this.dexterity = dexterity;
    this.appearance = appearance;
    this.size = size;
    this.intelligence = intelligence;
    this.education = education;

    this.hitPoints = Math.floor((this.size + this.constitution) / 10);
    this.luck = droll(3)(6) * 5;
  }

  normalRoll = (characteristic: Characteristic) => roll() <= this[characteristic];

  hardRoll = (characteristic: Characteristic) => roll() <= this[characteristic] / 2;

  extremeRoll = (characteristic: Characteristic) => roll() <= this[characteristic] / 5;
}

export class Journalist extends Character {
  constructor() {
    super({
      strength: 40,
      constitution: 50,
      power: 60,
      dexterity: 50,
      appearance: 50,
      size: 30,
      intelligence: 70,
      education: 80,
    });
  }
}

export class Gangster extends Character {
  constructor() {
    super({
      strength: 80,
      constitution: 70,
      power: 50,
      dexterity: 50,
      appearance: 50,
      size: 60,
      intelligence: 50,
      education: 40,
    });
  }
}

export class Detective extends Character {
  constructor() {
    super({
      strength: 50,
      constitution: 40,
      power: 50,
      dexterity: 70,
      appearance: 60,
      size: 50,
      intelligence: 80,
      education: 50,
    });
  }
}
