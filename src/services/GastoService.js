import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const obtenerGastos = async (period) => {
  return await apiFetch(`${BACKEND_URL}api/gastos?period=${period}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const crearGasto = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/gastos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const editarGasto = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/gastos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const eliminarGasto = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/gastos/eliminar/${id}`, {
    method: "DELETE",
  });
};
