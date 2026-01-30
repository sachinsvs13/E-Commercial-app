import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "../App";
import Samsung from "../pages/Samsung";
import SamsungS from "../pages/SamsungS";
import SamsungZ from "../pages/SamsungZ";
import Galaxy from "../pages/Galaxy"
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Apple from "../pages/apple";
import AppleSeries from "../pages/AppleSeries";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <h1>home</h1>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/check-out",
          element:<CheckOut/>
        },
        {
          path : "/Samsung",
          element: <Samsung/>,
        },
        {
          path : "/Samsung/Samsung-S",
          element: <Galaxy/>
        },
        {
          path : "/Samsung/Samsung-Z",
          element: <Galaxy/>
        },
        {
          path : "/apple",
          element : <Apple/>
        },
        {
          path : "/apple/iPhone",
          element : <AppleSeries/>
        }
        ],
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element:<Register/>
    }
  ]);

  export default router;