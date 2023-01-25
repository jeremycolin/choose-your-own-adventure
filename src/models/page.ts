import { Character, Profession } from "./character";

export interface Action {
  condition?: (character: Character) => boolean;
  page: number;
  profession?: Profession;
  effect?: (character: Character) => void;
}

export interface Choice {
  label: string;
  actions: Array<Action>;
}

export interface PageData {
  text: string;
  context?: string;
  choices: Array<Choice>;
}
