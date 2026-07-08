import { useState } from "react";

import AuthContext from "../../context/AuthContext";

const AuthProvider = ({ children }) => {
  // aqui se peude obtener el usuario al hacer login para componentes de perfil y dropdown.
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
