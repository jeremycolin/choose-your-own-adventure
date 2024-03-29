import { ChangeEvent, KeyboardEvent, MouseEvent, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import cx from "classnames";
import { Action, Choice, PageData } from "../models/page";
import { useCharacter } from "../models/use-character";
import { useScrollToTop } from "../use-scroll-to-top";
import classes from "./page.module.css";
import buttonClasses from "./button.module.css";

export const Page = () => {
  useScrollToTop();
  const { title, text, context, choices } = useLoaderData() as PageData;
  const navigate = useNavigate();
  const { character, createCharacter, setProfession } = useCharacter();
  const [choiceEffect, setChoiceEffect] = useState<{ effect: "failure" | "success" | "neutral"; label: string }>({
    effect: "neutral",
    label: "",
  });

  const onChoice = (choice: Choice) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const action = choice.actions.find((action) => {
      if (!action.condition) {
        // if condition is not defined, action is selected
        return true;
      }
      return action.condition(character);
    });
    if (!action) {
      console.error("Could not find any possible actions, we're stuck here :(");
      return;
    }
    if (action.archetype) {
      createCharacter(action.archetype);
    } else if (action.profession) {
      setProfession(action.profession);
    }

    setChoiceEffect({ label: choice.label, effect: action.effect ?? "neutral" });
    e.target.addEventListener("transitionend", () => {
      navigate(`/cthulhu/${action.page}`);
      setChoiceEffect({ effect: "neutral", label: "" });
    });
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

  const { effect, label } = choiceEffect;
  return (
    <div className={classes.page}>
      <p className={classes.title}>{title}</p>
      <p className={classes.text}>{text}</p>
      {context ? <p className={`${classes.text} ${classes.context}`}>{context}</p> : null}
      {choices.map((choice) => {
        if (choice.prerequisite && !character.hasPrerequisite(choice.prerequisite)) {
          return null;
        } else if (choice.input) {
          return (
            <input
              className={classes.input}
              type="text"
              placeholder={choice.label}
              onChange={onInputChange(choice.input)}
              onKeyDown={onInputSubmit(choice.actions[0])}
              key={choice.label}
            />
          );
        }
        return (
          <button
            className={cx(buttonClasses.button, {
              [buttonClasses.success]: effect === "success" && label === choice.label,
              [buttonClasses.neutral]: effect === "neutral" && label === choice.label,
              [buttonClasses.failure]: effect === "failure" && label === choice.label,
            })}
            onClick={onChoice(choice)}
            key={choice.label}
          >
            {choice.label}
          </button>
        );
      })}
    </div>
  );
};
