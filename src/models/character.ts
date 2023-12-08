export type Archetype = "smart" | "agile" | "strong";
export type Profession = "antiquarian" | "doctor" | "journalist" | "private investigator" | "professor";

const roll = (base = 100) => Math.floor(Math.random() * base) + 1;

const droll =
  (dice: number) =>
  (base = 100) =>
    Array.from({ length: dice }, () => roll(base)).reduce((sum, curr) => sum + curr, 0);

export type Characteristic = "strength" | "constitution" | "power" | "dexterity" | "appearance" | "size" | "intelligence" | "education";
export type Skill =
  | "accounting"
  | "anthropology"
  | "appraise"
  | "archeology"
  | "art"
  | "craft"
  | "charm"
  | "climb"
  | "disguise"
  | "dodge"
  | "driveAuto"
  | "electricRepair"
  | "fastTalk"
  | "brawl"
  | "handgun"
  | "shotgun"
  | "firstAid"
  | "history"
  | "intimidate"
  | "jump"
  | "ownLanguage"
  | "law"
  | "libraryUse"
  | "listen"
  | "locksmith"
  | "mechanicalRepair"
  | "medecine"
  | "naturalWorld"
  | "navigate"
  | "occult"
  | "operatingHeavyMachine"
  | "persuade"
  | "pilot"
  | "psychology"
  | "psychoanalysis"
  | "ride"
  | "science"
  | "sleightOfHands"
  | "spotHidden"
  | "stealth"
  | "survival"
  | "swim"
  | "throw"
  | "track"
  | "latin"
  | "biology"
  | "pharmacy"
  | "photographhy";

export class Character {
  strength: number;
  constitution: number;
  power: number;
  dexterity: number;
  appearance: number;
  size: number;
  intelligence: number;
  education: number;

  luck: number;

  sanity: number;
  hitPoints: number;
  maxHitPoints: number;
  magicPoints: number;
  maxMagicPoints: number;

  name: string;
  profession?: Profession;
  creditRating?: number;

  accounting = 5;
  anthropology = 1;
  appraise = 5;
  archeology = 1;
  art = 5;
  craft = 5;
  charm = 15;
  climb = 20;
  disguise = 5;
  dodge = 0;
  driveAuto = 20;
  electricRepair = 10;
  fastTalk = 5;
  brawl = 25;
  handgun = 20;
  shotgun = 25;
  firstAid = 30;
  history = 5;
  intimidate = 15;
  jump = 20;
  ownLanguage = 0;
  law = 5;
  libraryUse = 20;
  listen = 20;
  locksmith = 1;
  mechanicalRepair = 10;
  medecine = 1;
  naturalWorld = 10;
  navigate = 10;
  occult = 5;
  operatingHeavyMachine = 1;
  persuade = 10;
  pilot = 1;
  psychology = 10;
  psychoanalysis = 1;
  ride = 5;
  science = 1;
  sleightOfHands = 10;
  spotHidden = 25;
  stealth = 20;
  survival = 10;
  swim = 20;
  throw = 20;
  track = 10;
  latin = 0;
  biology = 0;
  pharmacy = 0;
  photographhy = 0;

  prerequisites: string[] = [];

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
    this.maxHitPoints = this.hitPoints;
    this.magicPoints = Math.floor(this.power);
    this.maxMagicPoints = this.magicPoints;

    this.dodge = Math.floor(dexterity / 2);
    this.ownLanguage = this.education;

    this.name = "";
  }

  normalRoll = (characteristicOrSkill: Characteristic | Skill) => roll() <= this[characteristicOrSkill];

  hardRoll = (characteristicOrSkill: Characteristic | Skill) => roll() <= this[characteristicOrSkill] / 2;

  extremeRoll = (characteristicOrSkill: Characteristic | Skill) => roll() <= this[characteristicOrSkill] / 5;

  setProfession = (profession: Profession) => {
    this.profession = profession;

    switch (profession) {
      case "antiquarian": {
        this.creditRating = 20;

        this.appraise = 70;
        this.art = 60;
        this.history = 50;
        this.libraryUse = 60;
        this.spotHidden = 40;
        this.charm = 40;
        this.fastTalk = 50;
        this.persuade = 50;
      }
      case "doctor": {
        this.creditRating = 30;

        this.firstAid = 60;
        this.latin = 40;
        this.medecine = 70;
        this.psychology = 50;
        this.biology = 50;
        this.pharmacy = 60;
        this.persuade = 40;
        this.libraryUse = 50;
      }
      case "journalist": {
        this.creditRating = 20;

        this.photographhy = 60;
        this.libraryUse = 70;
        this.fastTalk = 60;
        this.history = 50;
        this.psychology = 50;
        this.persuade = 50;
        this.charm = 40;
        this.spotHidden = 40;
      }
      case "private investigator": {
        this.creditRating = 20;

        this.photographhy = 40;
        this.disguise = 40;
        this.law = 50;
        this.libraryUse = 50;
        this.spotHidden = 60;
        this.psychology = 70;
        this.fastTalk = 50;
        if (this.size >= 60) {
          this.intimidate = 60;
        } else {
          this.persuade = 60;
        }
      }
      case "professor": {
        this.creditRating = 30;

        this.libraryUse = 70;
        this.ownLanguage = 50;
        this.psychology = 60;
        this.listen = 50;
        this.history = 50;
        this.persuade = 60;
        this.occult = 40;
        this.science = 40;
      }
    }
  };

  setHitPoints(hitPoints: number) {
    this.hitPoints = Math.min(hitPoints, this.maxHitPoints);

    // TODO if this.hitPoints <= 0
  }

  hasPrerequisite(prerequisite: string) {
    return this.prerequisites.includes(prerequisite);
  }
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

    this.electricRepair = 30;
    this.pilot = 21;
    this.track = 30;
    this.psychoanalysis = 21;
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

    this.climb = 40;
    this.locksmith = 21;
    this.sleightOfHands = 30;
    this.stealth = 40;
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

    this.brawl = 45;
    this.handgun = 40;
    this.throw = 40;
    this.survival = 30;
  }
}
