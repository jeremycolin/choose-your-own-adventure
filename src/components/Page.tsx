import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Action, Choice, PageData } from "../models/page";
import { useCharacter } from "../models/use-character";
import { useScrollToTop } from "../utils/use-scroll-to-top";
import classes from "./page.module.css";

export const Page = () => {
  useScrollToTop();
  const { text, context, choices } = useLoaderData() as PageData;
  const { page } = useParams();
  const navigate = useNavigate();
  const { character, createCharacter } = useCharacter();

  const onChoice = (choice: Choice) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

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
    navigate(`/cthulhu/${action.page}`);
  };

  const onInputChange = (input: "name") => (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (character) {
      character[input] = e.target.value;
    }
  };

  const onInputSubmit = (action: Action) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/cthulhu/${action.page}`);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className={classes.page}>
      <p className={classes.title}>{page}</p>
      <p className={classes.text}>{text}</p>
      {context ? <p className={`${classes.text} ${classes.context}`}>{context}</p> : null}
      {choices.map((choice) =>
        choice.input ? (
          <input
            className={classes.input}
            type="text"
            placeholder={choice.label}
            onChange={onInputChange(choice.input)}
            onKeyDown={onInputSubmit(choice.actions[0])}
            key={choice.label}
          />
        ) : (
          <button className={classes.button} onClick={onChoice(choice)} key={choice.label}>
            {choice.label}
          </button>
        )
      )}
    </div>
  );
};
