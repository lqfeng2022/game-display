import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      //1)'games/:id' ->
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
