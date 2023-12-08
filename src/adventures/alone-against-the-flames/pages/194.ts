import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "194",
  text: "Silas opens the engine compartment open and sticks his head inside. The hot metal pops and sizzles. He pokes at various components, then withdraws and wipes his brow, smearing it with dark grease.\n\t“I ain't sure what's wrong. Might be the oil pressure. Might be something knocked off kilter when we took that spill. Can't do much until the engine cools neither. And with the light failing… I reckon we'll be here through the night.” He wipes his hands on a rag.\n\tThe shadows from your surroundings are already long, and the air is chilly. You feel stiff from the journey and a night in the rickety coach sounds unappealing. Silas sees your dismay.\n\t“This here's Emberhead. Miles from anyplace. I only come through twice a week. But the folks here are good people. May Ledbetter keeps a spare room. She'll look after you. Up that alley, turn right, first house on the left.”\n\tHe scratches his cheek, looks again into the engine compartment, and spits on the ground.\n\t“Meet me back here at eight in the morning and we'll see how's we stand.”",
  choices: [
    { label: "Look for May Ledbetter’s house", actions: [{ page: "267" }] },
    { label: "Ask Silas where he will be spending the night", actions: [{ page: "251" }] },
    { label: "Challenge Silas about the breakdown", actions: [{ page: "257" }] },
  ],
};
