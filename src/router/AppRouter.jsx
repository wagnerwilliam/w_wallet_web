import { createBrowserRouter } from "react-router-dom";

import Login from "../components/auth/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Register from "../components/auth/Register";
import Categorias from "../components/categorias/Categorias";
import Dashboard from "../components/dashboard/Dashboard";
import Gastos from "../components/gastos/Gastos";
import Ingresos from "../components/ingresos/Ingresos";
import AuthLayout from "../components/layouts/AuthLayout";
import BaseLayout from "../components/layouts/BaseLayout";
import MetasAhorroDetalle from "../components/metas_ahorro/detalle/MetasAhorroDetalle";
import MetasAhorro from "../components/metas_ahorro/MetasAhorro";
import Resumen from "../components/resumen/Resumen";

const router = createBrowserRouter([
  // Rutas publicas.
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // Rutas privadas.
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: "/home",
            element: <Dashboard />,
          },
          // {
          //   path: "/analisis",
          //   element: <IncomeExpenseChart />,
          // },
          {
            path: "/ingresos",
            element: <Ingresos />,
          },
          {
            path: "/gastos",
            element: <Gastos />,
          },
          {
            path: "/categorias",
            element: <Categorias />,
          },
          {
            path: "/metas-ahorro",
            element: <MetasAhorro />,
          },
          {
            path: "/resumen",
            element: <Resumen />,
          },
          {
            path: "/metas/detalle/:id",
            element: <MetasAhorroDetalle />,
          },
        ],
      },
    ],
  },
]);

export default router;
