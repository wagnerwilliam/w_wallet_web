import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ObtenerIngresos = async () => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const crearIngreso = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const editarIngreso = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const eliminarIngreso = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/eliminar/${id}`, {
    method: "DELETE",
  });
};
