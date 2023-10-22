/* eslint-disable no-unused-vars */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import { Children } from "react";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/shared/terms";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayouts></LoginLayouts>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({params}) => fetch(`https://online-newspaper-server-eq4xwhn3r-tawratur-rashids-projects.vercel.app/categories/${params.id}`)
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoutes><News></News></PrivateRoutes>,
        loader: ({params}) => fetch(`https://online-newspaper-server-eq4xwhn3r-tawratur-rashids-projects.vercel.app/news/${params.id}`)
      },
    ],
  },
]);

export default router;
