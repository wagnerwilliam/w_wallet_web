import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import Context from "../../context/Context";

const ProtectedRoute = () => {
  let { accessToken } = useContext(Context);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
