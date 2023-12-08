import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "166",
  text: "May seems to have no running water, but has supplied some in a ceramic jug. You freshen up at the washstand and go in. She cooks a hearty breakfast and leaves you in peace to eat. At about seven-thirty, you are paid up, packed, and ready to go. You bid May goodbye and she wishes you the best for your new career in Arkham. If you succeeded at a skill roll last night, and wish to investigate",
  choices: [
    { label: "TODO LABEL - the results further, go to 178.", prerequisite: "night-investigation", actions: [{ page: "178" }] },
    { label: "Go meet Silas at the rendezvous point", actions: [{ page: "192" }] },
  ],
};
