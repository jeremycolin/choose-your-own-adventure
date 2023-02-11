import { useState } from "react";
import { Agile, Archetype, Character, Smart, Strong } from "./character";

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character>();

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

  return { character, createCharacter };
};
