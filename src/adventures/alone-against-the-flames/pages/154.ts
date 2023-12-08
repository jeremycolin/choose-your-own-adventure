import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "154",
  text: "You dream of fire in the grate; coruscating colors shimmering through the dancing tongues of flame. At first they are tiny, almost microscopic, but they grow, and grow, until a kaleidoscopic inferno spills from the fireplace, spreading across the floor, up the sheets…\n\tYou wake with a start. Daylight glints through the curtains. You get up and examine the grate, blinking the sleep from your eyes. It is quite cold.",
  choices: [
    {
      label: "Freshen up and go downstairs for breakfast",
      actions: [{ page: "166", sideEffect: (character) => character.setHitPoints(character.hitPoints + 1) }],
    },
  ],
};
