import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "14",
  text: "May shakes her head and you glimpse a moment of deep-seated anger in her green eyes.\n\t“He always drives too fast. Thinks the road is made for him and him alone. He hit a mare some years back, that was a terrible thing. You should have seen the state of the coach. You'd be surprised at the damage done.”\n\tShe sips her tea and gazes past you, into the corner of the room.\n\t“With living here, though, we can't afford to antagonize the man. He's about the only link we have to the world at large. And he's not a bad soul at heart. I suppose that going the same route for fifteen years makes a man careless. You have to forgive him.”\n\tMay goes silent for a long moment. Then her eyes flick back to you.\n\t“But you didn't come here to listen to me blather, and you must be hungry. I can rustle you up a bit of stew. How would that be?”\n\tYou ask again about her rates, and May names a price so low you accept it without hesitation. The room is small but comfortable, and the stew dark and hearty. After dinner, you have a couple of hours before your usual bedtime.",
  choices: [
    { label: "Chat with May some more", actions: [{ page: "31" }] },
    { label: "Walk around outside and get your bearings", actions: [{ page: "75" }] },
    { label: "Turn in for an early night", actions: [{ page: "63" }] },
  ],
};
