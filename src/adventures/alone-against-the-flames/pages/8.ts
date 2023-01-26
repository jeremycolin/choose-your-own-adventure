import { PageData } from "../../../models/page";

export const page: PageData = {
  text: "The driver smokes and watches as you drag your cases to the back of the motor coach. The rack is set inconveniently high on the vehicle. You get a grip on the heavier case.",
  choices: [
    {
      label: "Try to put your cases on the rack",
      actions: [
        { page: "23", condition: (character) => character.size <= 40, effect: "success" },
        { page: "38", condition: (character) => character.size > 40, effect: "failure" },
      ],
    },
  ],
};
