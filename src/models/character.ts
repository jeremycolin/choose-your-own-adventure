export type Profession = "journalist" | "detective" | "gangster";

export class Character {
  private strength: number;
  private constitution: number;
  private power: number;
  private dexterity: number;
  private appearance: number;
  private size: number;
  private intelligence: number;
  private education: number;

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
  }
}

export class Journalist extends Character {
  constructor() {
    super({
      strength: 40,
      constitution: 50,
      power: 60,
      dexterity: 50,
      appearance: 50,
      size: 50,
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
