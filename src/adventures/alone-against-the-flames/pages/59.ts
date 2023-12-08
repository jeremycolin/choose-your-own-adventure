import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "59",
  text: "Too late, you reach for the seat in front. You fall into the aisle and your ribs crash against the edge of the seat opposite. Breath rushes out of you. The coach stops with a thump.\n\tYour driver leaps from his seat into the road. As you sprawl, dizzy, in the aisle, you hear a string of incendiary curses.\n\tThe driver climbs back into the cab and sees you on the floor. He looks concerned and assists you back into your seat. You see what has happened now. A Fordson tractor has stopped in the road and he had to swerve to avoid this steel obstacle.\n\t“Sorry,” he says. “All them fields and he has to pick the road to park. You all right?”\n\tYou don't think anything's broken. But you'll have a colorful bruise for the next few days. He backs the coach up a little and threads it around the tractor, glaring at the farmer. ",
  choices: [
    {
      label: "Journey on",
      actions: [
        {
          page: "71",
          sideEffect: (character) => character.setHitPoints(character.hitPoints - 1),
        },
      ],
    },
  ],
};
