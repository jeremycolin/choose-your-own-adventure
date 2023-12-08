import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "71.1",
  text: "The accident was at least as much Silas's fault as the farmer's. But it doesn't seem shrewd to antagonize the man while he is driving you through the middle of nowhere.\n\tThe coach turns onto a narrower road, which weaves uphill through woodland. Silas becomes chatty.\n\t“Going to Arkham, eh? Can't say I ever heard of the place. Went to Boston once. Didn't like it. Too much hustle and bustle. You got family there? A special someone waiting?”\n\tThe afternoon is wearing on. You see no harm in confiding in Silas about your new life.\n\t“A job eh? What's your line?”",
  choices: [
    { label: "I am an Antiquarian", actions: [{ page: "102", profession: "antiquarian" }] },
    { label: "I am a Doctor of Medicine", actions: [{ page: "226", profession: "doctor" }] },
    { label: "I am a Journalist", actions: [{ page: "239", profession: "journalist" }] },
    { label: "I am a Private Investigator", actions: [{ page: "249", profession: "private investigator" }] },
    { label: "I am a Professor", actions: [{ page: "265", profession: "professor" }] },
  ],
};
