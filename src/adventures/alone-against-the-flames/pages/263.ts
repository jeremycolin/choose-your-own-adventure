import { PageData } from "../../../models/page";

export const page: PageData = {
  text: "Two young men with sullen expressions alight from the coach. One looks you up and down before heading away. The driver also steps down, glancing at you before crossing the road to visit the tobacconist. When he returns, he is rolling a cigarette between his yellowed fingers. He gives it a final twist and examines you as he reaches for his matchbox. He is a thin man in his fifties, dressed in a stained shirt with the bus company emblem. Yet his eyes are sharp in their dark sockets.\n\t“Where to?”\n\tYou show him your ticket for Ossipee. From there you will connect to Rochester and Portsmouth, before the coastal line to Newburyport and, finally, Arkham. You should be able to afford a rail ticket for at least some of the way; otherwise this will be the first of many long bus trips.\n\t“Mmm-hm.” The driver scratches the match and lights his cigarette. The end flares as he takes a draw. Then he exhales and gestures to the back of the coach. “Luggage rack's up there.”",
  context: "By the way, who are you?",
  choices: [
    {
      label: "I am a journalist",
      actions: [{ page: "8", profession: "journalist" }],
    },
    {
      label: "I am a detective",
      actions: [{ page: "8", profession: "detective" }],
    },
    {
      label: "I am a gangster",
      actions: [{ page: "8", profession: "gangster" }],
    },
  ],
};
