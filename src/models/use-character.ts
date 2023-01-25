import { useState } from "react";
import { Character, Detective, Gangster, Journalist, Profession } from "./character";

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character>();

  const createCharacter = (profession: Profession) => {
    switch (profession) {
      case "journalist": {
        setCharacter(new Journalist());
        break;
      }
      case "detective": {
        setCharacter(new Detective());
        break;
      }
      case "gangster": {
        setCharacter(new Gangster());
        break;
      }
    }
  };

  return { character, createCharacter };
};
