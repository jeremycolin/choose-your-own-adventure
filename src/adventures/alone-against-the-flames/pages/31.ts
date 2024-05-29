import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "31",
  text: "May talks about life in Emberhead. “In her letters my sister always asks if I'm not bored, living in such a small place. She lives in New York. Then she writes about how frightened she is to walk home at night! I ask you.”\n\tYou mention your hopes for a new life in Arkham. May doesn't seem to hear you.\n\t“It's a small place here, yes, but that means we have real community. Everybody's face is known. Everybody works together. Nobody is excluded. Except those who choose to exclude themselves, of course. I couldn't live anywhere else now.”",
  choices: [
    {
      label: "Charm May for her to open up",
      actions: [
        { page: "39", condition: (character) => character.normalRoll("charm"), effect: "success" },
        { page: "51", effect: "failure" },
      ],
    },
  ],
};
