import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Profession } from "../models/character";
import { useCharacter } from "../models/use-character";
import { useScrollToTop } from "../utils/use-scroll-to-top";
import classes from "./page.module.css";

export interface PageLoaderData {
  text: string;
  context?: string;
  next: [{ label: string; page: number; profession?: Profession }];
}

export const Page = (props: any) => {
  useScrollToTop();
  const { text, context, next } = useLoaderData() as PageLoaderData;
  const { page } = useParams();
  const navigate = useNavigate();
  const { character, createCharacter } = useCharacter();

  console.log(character);

  return (
    <div className={classes.page}>
      <p className={classes.title}>{page}</p>
      <p className={classes.text}>{text}</p>
      {context ? (
        <p className={`${classes.text} ${classes.context}`}>{context}</p>
      ) : null}
      {next.map((action) => (
        <div
          className={classes.button}
          onClick={() => {
            if (action.profession) {
              createCharacter(action.profession);
            }
            navigate(`/book/${action.page}`);
          }}
          key={`${action.label}-${action.page}`}
        >
          {action.label}
        </div>
      ))}
    </div>
  );
};
