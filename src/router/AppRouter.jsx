import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import { MainPage } from "../pages/MainPage";
import { ProjectsPage } from "../pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/main" />,
      },
      {
        path: "main",
        element: <MainPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "/*",
        element: <Navigate to="/main" />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
