import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page } from "./components/Page";
import { PageData } from "./models/page";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: null,
  },
  {
    path: "cthulhu/:page",
    element: <Page />,
    loader: async function ({ params }): Promise<PageData> {
      const { page } = await import(`./adventures/alone-against-the-flames/pages/${params.page}.ts`);
      return page;
    },
  },
]);

export const App = () => <RouterProvider router={router} />;
