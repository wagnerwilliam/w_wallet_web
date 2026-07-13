import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ObtenerMetas = async () => {
  return await apiFetch(`${BACKEND_URL}api/metas/`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const ObtenerMeta = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/metas/detalle/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const crearMeta = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/metas/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const editarMeta = async (_id, data) => {
  return await apiFetch(`${BACKEND_URL}api/metas/editar/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const agregarAhorro = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/metas/agregar-ahorro/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
