import Layout from "../components/layout/layout";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
