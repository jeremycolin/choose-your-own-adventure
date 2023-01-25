import { PageData } from "../../../models/page";

export const page: PageData = {
  text: "You resume your journey. The driver takes the curves with more caution than before. He glances over his shoulder at you a couple of times.\n\t“Sorry about before,” he says. “That fella was dumber than a hog. I'm Silas. What's your name?”",
  choices: [{ label: "Enter your name", input: "name", actions: [{ page: "71-1" }] }],
};

// TODO come up with a name selection here
`Make up a name for your character and record it on your investigator sheet. You may add your age; for the purposes of this adventure your character should probably be aged between 23 and 36.`;
