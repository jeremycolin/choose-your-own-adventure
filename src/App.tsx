import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page } from "./components/Page";
import { PageData } from "./models/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "book/:page",
    element: <Page />,
    loader: async function ({ params }): Promise<PageData> {
      const { page } = await import(
        `./adventures/alone-against-the-flames/pages/${params.page}`
      );
      return page;
    },
  },
]);

export const App = () => <RouterProvider router={router} />;
