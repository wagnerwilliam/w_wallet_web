const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CLIENT_KEY = import.meta.env.VITE_APP_CLIENT_KEY;

import { apiFetch } from "./ApiFetch";

export const ObtenerCategorias = async (accessToken) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/`, accessToken);
  // return await fetch(`${BACKEND_URL}api/categorias/`, {
  //   headers: {
  //     "client-key": CLIENT_KEY,
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });
};

export const crearCategoria = async (data, accessToken) => {
  return await fetch(`${BACKEND_URL}api/categorias/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const editarCategoria = async (id, data, accessToken) => {
  return await fetch(`${BACKEND_URL}api/categorias/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  });
};

export const eliminarCategoria = async (id, accessToken) => {
  return await fetch(`${BACKEND_URL}api/categorias/eliminar/${id}`, {
    method: "DELETE",
    headers: {
      "client-key": CLIENT_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
