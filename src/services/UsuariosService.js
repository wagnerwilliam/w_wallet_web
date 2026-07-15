import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Servicios para la gestión del perfil del usuario.
 *
 * Centraliza las peticiones HTTP relacionadas con la consulta
 * y actualización de la información del usuario autenticado.
 */

/**
 * Obtiene la información del usuario autenticado.
 */
export const detalleUsuario = async () => {
  return await apiFetch(`${BACKEND_URL}api/usuarios/detalle`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Actualiza la información del perfil del usuario.
 *
 * @param {FormData} formData Datos del perfil, incluida la fotografía si aplica.
 */
export const editarUsuario = async (formData) => {
  return await apiFetch(`${BACKEND_URL}api/usuarios/editar`, {
    method: "PATCH",
    body: formData,
  });
};
