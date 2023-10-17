/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import { Children } from "react";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Category></Category>,
        loader: () => fetch('http://localhost:5000/news')
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      },
    ],
  },
]);

export default router;
