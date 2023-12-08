import { Archetype, Character, Profession } from "./character";

export interface Action {
  condition?: (character: Character) => boolean;
  page: string;
  archetype?: Archetype;
  profession?: Profession;
  sideEffect?: (character: Character) => void;
  effect?: "failure" | "success";
}

export interface Choice {
  label: string;
  input?: "name";
  prerequisite?: string; // some choices are only available if you have done certain actions before
  actions: Array<Action>;
}

export interface PageData {
  title: string;
  text: string;
  context?: string;
  choices: Array<Choice>;
}
