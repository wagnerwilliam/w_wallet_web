import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import AuthLayout from "../components/layouts/AuthLayout";
import Register from "../components/auth/Register";
import BaseLayout from "../components/layouts/BaseLayout";
import Ingresos from "../components/ingresos/Ingresos";
import Categorias from "../components/categorias/Categorias";
import Gastos from "../components/gastos/Gastos";
import MetasAhorro from "../components/metas_ahorro/MetasAhorro";
import Resumen from "../components/resumen/Resumen";

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
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/ingresos",
        element: <Ingresos />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/gastos",
        element: <Gastos />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/categorias",
        element: <Categorias />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/metas-ahorro",
        element: <MetasAhorro />,
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/resumen",
        element: <Resumen />,
      },
    ],
  },
]);

export default router;
