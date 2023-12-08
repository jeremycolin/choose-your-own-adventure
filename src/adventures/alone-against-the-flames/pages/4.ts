import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "4",
  text: "After a moment, you hear footsteps inside the house. A bolt is drawn back and the wooden door swings open. A figure with loose curls and a rough-looking housedress peers at you. Her gaze takes in your traveling suit and your cases. Her voice has a slight Irish lilt.\n\t“Hello. Should I take it as you're looking for a room for the night?”\n\tYou enquire as to her rates, suppressing a grimace. As far as you've seen, the village does not offer you many alternatives.\n\t“Oh, you'll find them very reasonable,” she says. “You look tired. I'm May. Come inside and we'll talk over a cup of tea.”\n\tThe Ledbetter house feels cramped, with a low ceiling and simple fittings. But it is well kept and a cheerful fire crackles in the grate. The aroma of the tea is soothing and the cup warms your fingers.\n\t“Have you come to Emberhead for the festival?” asks May.",
  choices: [
    { label: "Explain what happened with Silas and the coach", actions: [{ page: "14" }] },
    { label: "Enquire about the festival", actions: [{ page: "21" }] },
  ],
};
