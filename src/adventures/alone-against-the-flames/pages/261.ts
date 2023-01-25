import { PageData } from "../../../models/page";

export const page: PageData = {
  text: "You grab hold of the seat in front, just in time to prevent a painful fall. The coach stops with a thump.\n\tNow you see what has happened. A Fordson tractor has stopped in the road and your driver has had to swerve to avoid this steel obstacle. He leaps from his seat into the road, unleashing a string of curses at the farmer.\n\tYou take a moment to catch your breath. Perhaps you should offer assistance? But the driver has already returned. He backs the coach up a little and threads it around the tractor, glaring at the farmer.",
  choices: [
    {
      label: "Journey on",
      actions: [{ page: 71 }],
    },
  ],
};
