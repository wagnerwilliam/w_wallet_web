import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

/**
 * Componente que protege las rutas privadas de la aplicación.
 *
 * Verifica si el usuario está autenticado mediante el token de acceso.
 * Si no existe una sesión activa, redirige al inicio de sesión;
 * de lo contrario, renderiza la ruta solicitada.
 */
const ProtectedRoute = () => {
  let { accessToken } = useContext(AuthContext);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
