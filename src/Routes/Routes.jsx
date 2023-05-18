import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Login from "../pages/Login/Login";

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
        element:<MyToys></MyToys>
      },
      {
        path:'/addToy',
        element:<AddToys></AddToys>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ]
    },
  ]);

  export default router;