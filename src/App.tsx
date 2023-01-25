import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page, PageLoaderData } from "./components/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "book/:page",
    element: <Page />,
    loader: async function ({ params }): Promise<PageLoaderData> {
      const { text, context, next } = (
        await import(
          `./adventure/alone-against-the-flames/pages/${params.page}`
        )
      ).default;
      return {
        text,
        context,
        next,
      };
    },
  },
]);

export const App = () => <RouterProvider router={router} />;
