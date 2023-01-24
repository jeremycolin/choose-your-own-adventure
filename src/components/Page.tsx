import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useScrollToTop } from "../utils/use-scroll-to-top";
import classes from "./page.module.css";

export interface PageLoaderData {
  text: string;
  next: [{ label: string; page: number }];
}

export const Page = (props: any) => {
  useScrollToTop();
  const { text, next } = useLoaderData() as PageLoaderData;
  const { page } = useParams();

  const navigate = useNavigate();

  return (
    <div className={classes.page}>
      <p className={classes.title}>{page}</p>
      <p className={classes.text}>{text}</p>
      {next.map((action) => (
        <div
          className={classes.button}
          onClick={() => navigate(`/book/${action.page}`)}
        >
          {action.label}
        </div>
      ))}
    </div>
  );
};
