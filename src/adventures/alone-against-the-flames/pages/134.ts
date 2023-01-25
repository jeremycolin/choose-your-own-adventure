import { PageData } from "../../../models/page";

export const page: PageData = {
  text: "The coach putters through the countryside. At first, the interior is stifling and your stomach lurches with every bend in the road. However, the driver opens his window, and by switching seats you find a spot where the breeze hits your face. You soon relax into the journey, observing the quaint little hamlets that the coach serves. A heavy-set woman boards at one settlement and gives you a polite nod. She gets off at the next one.\n\tThe road rises a little, passing cornfields and orchards. The leaves are turning and the trees are alive with glorious reds and golds. You have just begun to doze when the driver takes a tight bend at speed. A desperate yell awakens you. You feel yourself slide from the seat as the driver spins the wheel and the motor-coach plunges off the road.",
  choices: [
    {
      label: "Try to hold on to something",
      actions: [{ page: "261", condition: (character) => character.normalRoll("dexterity") }, { page: "59" }],
    },
  ],
};
