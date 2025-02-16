import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import BaseLayout from "../layout/base-layout";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <>hi</>,
      },
    ],
  },
]);
