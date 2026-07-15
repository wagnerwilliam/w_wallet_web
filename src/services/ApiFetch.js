const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;
import { refreshAccessToken } from "./AuthService";

/**
 * Realiza peticiones HTTP autenticadas a la API.
 *
 * Si el access token ha expirado (401 Unauthorized), intenta renovarlo
 * automáticamente utilizando el refresh token. Si la renovación es
 * exitosa, actualiza el access token almacenado y reintenta la petición
 * original. En caso contrario, elimina la sesión local y propaga el error.
 */
export const apiFetch = async (url, options = {}) => {
  // Obtiene el access token almacenado localmente.
  const accessToken = localStorage.getItem("accessToken");

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "client-key": CLIENT_KEY,
      ...(accessToken && {
        Authorization: `Bearer ${accessToken}`,
      }),
    },
  });

  if (response.status !== 401) {
    return response;
  }

  const res = await refreshAccessToken();

  if (!res.ok) {
    localStorage.removeItem("accessToken");
    throw new Error("No se pudo renovar el token");
  }

  // Guarda el nuevo access token y reintenta la petición original.
  let { newAccessToken } = await res.json();

  localStorage.setItem("accessToken", newAccessToken);

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${newAccessToken}`,
      "client-key": CLIENT_KEY,
    },
  });
};
