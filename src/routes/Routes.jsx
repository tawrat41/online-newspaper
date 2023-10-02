/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main'
import { Children } from "react";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/home',
          element: <Home></Home>
        }
      ]
    },
  ]);

export default router;