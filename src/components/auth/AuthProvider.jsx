import { useState } from "react";

import AuthContext from "../../context/AuthContext";

/**
 * Proveedor del contexto de autenticación.
 *
 * Administra el estado global de la sesión del usuario y expone
 * las funciones de inicio y cierre de sesión. El token de acceso
 * se sincroniza con el almacenamiento local para mantener la
 * autenticación entre recargas de la aplicación.
 */
const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken"),
  );

  const login = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setAccessToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
