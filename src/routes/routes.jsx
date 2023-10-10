import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/notfound";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import AllJewellery from  "../components/AllJewellery/AllJewellery";
import MyJewellery from  "../components/MyJewellery/MyJewellery";
import AddJewellery from  "../components/AddJewellery/AddJewellery";
import Blogs from  "../components/Blogs/Blogs";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "alljewellery",
        element: <AllJewellery/>,
      },
      {
        path: "myjewellery",
        element: <MyJewellery/>,
      },
      {
        path: "addjewellery",
        element: <AddJewellery/>,
      },
      {
        path: "blogs",
        element: <Blogs/>,
      },
      {
        path: "signin",
        element: <SignIn/>,
      },
      {
        path: "signup",
        element: <SignUp/>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
