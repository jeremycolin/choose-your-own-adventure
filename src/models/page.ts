import { Character, Profession } from "./character";

export interface Action {
  condition?: (character: Character) => boolean;
  page: string;
  profession?: Profession;
  effect?: (character: Character) => void;
}

export interface Choice {
  label: string;
  input?: "name";
  actions: Array<Action>;
}

export interface PageData {
  text: string;
  context?: string;
  choices: Array<Choice>;
}
