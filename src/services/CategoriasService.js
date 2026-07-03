import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ObtenerCategorias = async () => {
  return await apiFetch(`${BACKEND_URL}api/categorias/`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const crearCategoria = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const editarCategoria = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const eliminarCategoria = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/eliminar/${id}`, {
    method: "DELETE",
  });
};
