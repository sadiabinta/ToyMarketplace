import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Register/Register";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>
      },
      {
        path:'/myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/addToy',
        element:<AddToys></AddToys>
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/toyDetails',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
      },
    ]
    },
  ]);

  export default router;