import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "21",
  text: "“Well now, I suppose the festival is about the only reason folks come to Emberhead. I thought you had maybe come to study it or take photographs. Well, it's not tomorrow night but the night after. I suppose it looks very strange to a passer-by.”\n\tMay tops-up your tea. The spout chinks against your cup.\n\t“We've got the Beacon, you see. One night every year there's a torch-lit procession and we light the Beacon on the cliffs. You've never seen the like of it. They say it keeps the spirit of the village alive for another year. It's a celebration. A celebration ...”\n\tShe tails off for a moment, and blinks.\n\t“But you didn't come here to listen to me blather, and you must be hungry. I can rustle you up a bit of stew. How would that be?”\n\tYou ask again about her rates, and May names a price so low you accept it without hesitation. The room is small but comfortable, and the stew dark and hearty. After dinner, you have a couple of hours before your usual bedtime.",
  choices: [
    { label: "Chat with May some more", actions: [{ page: "31" }] },
    { label: "Walk around outside and get your bearings", actions: [{ page: "75" }] },
    { label: "Turn in for an early night", actions: [{ page: "63" }] },
  ],
};
