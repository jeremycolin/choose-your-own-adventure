import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "2",
  text: "You put up a spirited resistance, but the man's bulk and determination wear you down. Finally he lands a crushing blow and you drop. Blackness floods in.\n\tLater, you are dimly aware of your legs being lifted and your back scraping against the ground as you are dragged off.",
  choices: [
    {
      label: "Your body rests as you pass out",
      actions: [
        {
          page: "108",

          sideEffect: (character) => character.setHitPoints(character.hitPoints + 1),
        },
      ],
    },
  ],
};
