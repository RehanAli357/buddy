import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import BaseLayout from "../layout/base-layout";
import HomePage from "../Page/home";
import OnBoardPage from "../Page/on-board";
import CreatePlanPage from "../Page/create-plan";
import ViewPlanPage from "../Page/view-plan";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.ONBOARD,
        element: <OnBoardPage />,
      },
      {
        path: ROUTES.CREATE_PLAN,
        element: <CreatePlanPage />,
      },
      {
        path: ROUTES.VIEW_PLAN,
        element: <ViewPlanPage />,
      },
    ],
  },
]);
