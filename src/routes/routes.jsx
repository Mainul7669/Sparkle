import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/notfound";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
