import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import BaseLayout from "../layout/base-layout";
import HomePage from "../Page/home";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage/>,
      },
    ],
  },
]);
