import "dotenv/config";
import axios from "axios";

const { DEEPL_API_KEY } = process.env;

const TEXT =
  "The sun is high in the sky, a merciless ball of heat. You feel scorched by the time you reach the bus halt in front of Osborn's Drug Store. It's a relief to put down your heavy cases and take off your hat for a moment. You fan your face. It has been a long summer here, in your hometown, and yet a curiously empty one.\n\tYou look across the street, at the grubby butcher's shop, the grocers with its faded awning, and the shabby tobacconist. Mistrustful faces glare at you as they pass, eyeing your clothes and luggage. It was your parents' choice to live here, not yours. You were happy down south as a child, among Providence's white-walled houses and leafy churchyards. Perhaps this new job in Arkham will supply the change you need.\n\tYet everybody you know in the world lives here. You know nobody in Arkham, not one soul. You ask yourself one last time if you are doing the right thing.\n\tThe answer is here. None of your supposed friends have come to see you off. You are alone. Whatever challenges lie in Arkham, it will be a new life, and a brave one.\n\tA small gray motor coach approaches and rattles to a stop. You put your hat back on and pick up your cases.";

const axiosInstance = axios.create({
  baseURL: "https://api-free.deepl.com/v2/",
  headers: {
    Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
    "Content-Type": "application/json",
  },
});

const main = async () => {
  const { data } = await axiosInstance.post("/translate", {
    text: [TEXT],
    formality: "prefer_more",
    source_lang: "EN",
    target_lang: "FR",
  });

  console.log(data);
};

main();
