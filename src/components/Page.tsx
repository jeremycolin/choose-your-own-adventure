import { useLoaderData, useParams } from "react-router-dom";
import classes from "./page.module.css";

export interface PageLoaderData {
  text: string;
  next: string;
}

export const Page = (props: any) => {
  const { text, next } = useLoaderData() as PageLoaderData;
  const { page } = useParams();

  return (
    <div className={classes.page}>
      <p className={classes.title}>{page}</p>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
