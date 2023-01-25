import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Profession } from "../models/character";
import { Choice, PageData } from "../models/page";
import { useCharacter } from "../models/use-character";
import { useScrollToTop } from "../utils/use-scroll-to-top";
import classes from "./page.module.css";

export const Page = (props: any) => {
  useScrollToTop();
  const { text, context, choices } = useLoaderData() as PageData;
  const { page } = useParams();
  const navigate = useNavigate();
  const { character, createCharacter } = useCharacter();

  const onChoice = (choice: Choice) => {
    const action = choice.actions.find((action) => {
      if (!action.condition || !character) {
        // if condition is not defined, action is selected
        return true;
      }
      return action.condition(character);
    });
    if (!action) {
      console.error("Could not find any possible actions, we're stuck here :(");
      return;
    }
    if (action.profession) {
      createCharacter(action.profession);
    }
    navigate(`/book/${action.page}`);
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>{page}</p>
      <p className={classes.text}>{text}</p>
      {context ? (
        <p className={`${classes.text} ${classes.context}`}>{context}</p>
      ) : null}
      {choices.map((choice) => (
        <div
          className={classes.button}
          onClick={() => onChoice(choice)}
          key={choice.label}
        >
          {choice.label}
        </div>
      ))}
    </div>
  );
};
