const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;

/**
 * Servicios de autenticación.
 *
 * Centraliza las peticiones HTTP relacionadas con el registro,
 * inicio de sesión, renovación del access token y cierre de sesión.
 */

/**
 * Registra un nuevo usuario.
 */
export const Register = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
    body: JSON.stringify(data),
  });
};

/**
 * Inicia sesión y crea la sesión del usuario.
 *
 * El backend devuelve el access token y almacena el refresh token
 * en una cookie HttpOnly.
 */
export const Login = async (data) => {
  return await fetch(`${BACKEND_URL}api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
    body: JSON.stringify(data),
  });
};

/**
 * Solicita un nuevo access token utilizando el refresh token
 * almacenado en la cookie HttpOnly.
 */
export const refreshAccessToken = async () => {
  return await fetch(`${BACKEND_URL}api/auth/refresh`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
  });
};

/**
 * Cierra la sesión del usuario e invalida el refresh token.
 */
export const Logout = async () => {
  return await fetch(`${BACKEND_URL}api/auth/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
    },
  });
};
