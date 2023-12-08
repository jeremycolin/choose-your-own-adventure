import { useState } from "react";
import { Agile, Archetype, Character, Profession, Smart, Strong } from "./character";

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(new Smart()); // TODO revisit initial character

  const createCharacter = (archetype: Archetype) => {
    switch (archetype) {
      case "smart": {
        setCharacter(new Smart());
        break;
      }
      case "agile": {
        setCharacter(new Agile());
        break;
      }
      case "strong": {
        setCharacter(new Strong());
        break;
      }
    }
  };

  const setProfession = (profession: Profession) => {
    character?.setProfession(profession);
  };

  return { character, createCharacter, setProfession };
};
