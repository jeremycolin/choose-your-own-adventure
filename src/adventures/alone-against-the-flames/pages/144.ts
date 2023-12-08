import { PageData } from "../../../models/page";

export const page: PageData = {
  title: "144",
  text: "The motor coach rattles on through the hills and Silas lapses into silence. The sky darkens behind you, pinks tinting the clouds as the sun descends. Finally a welcome sight comes into view: a settlement on the crest of a hill. This doesn't look like the pictures you've seen of Ossipee. But perhaps you can persuade Silas to stop while you stretch your legs.\n\tMinutes later, a harsh stuttering from the engine interrupts your reverie. Silas frowns and rattles the gear stick. The motor coach falters in its ascent. Silas utters a curse you don't recognize and grinds his teeth, struggling at the wheel. You seem to inch up the hill until you reach the first buildings, low dwellings constructed from a rough red stone. Silas wrestles the coach into a small bay off the road. He scrambles from his seat and makes for the engine compartment. If you choose Psychology, you need a Hard success. This is a roll equal to or less than half of the skill value (the number in the upper right box). You may attempt only one skill roll.",
  choices: [
    {
      label: "Help Silas investigate the engine",
      actions: [
        { page: "174", condition: (character) => character.normalRoll("driveAuto"), effect: "success" },
        { page: "194", effect: "failure" },
      ],
    },
    {
      label: "Try to read Silas's mood",
      actions: [
        { page: "162", condition: (character) => character.hardRoll("psychology"), effect: "success" },
        { page: "194", effect: "failure" },
      ],
    },
  ],
};
