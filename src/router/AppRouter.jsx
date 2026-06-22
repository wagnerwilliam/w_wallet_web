import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import AuthLayout from "../components/layouts/AuthLayout";
import Register from "../components/auth/Register";
import BaseLayout from "../components/layouts/BaseLayout";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/home",
        //element: <Login />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
