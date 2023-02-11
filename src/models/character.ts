export type Archetype = "smart" | "agile" | "strong";
export type Profession = "antiquarian" | "doctor" | "journalist" | "private investigator" | "professor";

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

  public luck: number;

  public sanity: number;
  public hitPoints: number;
  public magicPoints: number;

  public name: string;

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

    this.luck = droll(3)(6) * 5;

    this.sanity = this.power;
    this.hitPoints = Math.floor((this.size + this.constitution) / 10);
    this.magicPoints = Math.floor(this.power);

    this.name = "";
  }

  normalRoll = (characteristic: Characteristic) => roll() <= this[characteristic];

  hardRoll = (characteristic: Characteristic) => roll() <= this[characteristic] / 2;

  extremeRoll = (characteristic: Characteristic) => roll() <= this[characteristic] / 5;
}

export class Smart extends Character {
  constructor() {
    super({
      strength: 40,
      constitution: 50,
      power: 60,
      dexterity: 30,
      appearance: 50,
      size: 50,
      intelligence: 80,
      education: 70,
    });
  }
}

export class Agile extends Character {
  constructor() {
    super({
      strength: 30,
      constitution: 50,
      power: 50,
      dexterity: 80,
      appearance: 70,
      size: 40,
      intelligence: 60,
      education: 50,
    });
  }
}

export class Strong extends Character {
  constructor() {
    super({
      strength: 80,
      constitution: 70,
      power: 50,
      dexterity: 50,
      appearance: 50,
      size: 60,
      intelligence: 30,
      education: 40,
    });
  }
}
