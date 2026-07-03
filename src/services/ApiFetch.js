const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;
import { refreshAccessToken } from "./AuthService";

export const apiFetch = async (url, options = {}) => {
  // Buscar una forma de mejorar esta funcion esta muy cutre.
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
