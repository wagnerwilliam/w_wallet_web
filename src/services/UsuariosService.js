import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const detalleUsuario = async () => {
  return await apiFetch(`${BACKEND_URL}api/usuarios/detalle`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const editarUsuario = async (formData) => {
  return await apiFetch(`${BACKEND_URL}api/usuarios/editar`, {
    method: "PATCH",
    body: formData,
  });
};
