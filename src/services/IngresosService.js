import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Servicios para la gestión de ingresos.
 *
 * Centraliza las peticiones HTTP relacionadas con la consulta,
 * creación, actualización y eliminación de ingresos.
 */

/**
 * Obtiene el listado de ingresos según el período indicado.
 *
 * @param {string} period Período de consulta (day, week, month, year, etc.).
 */
export const ObtenerIngresos = async (period) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos?period=${period}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Crea un nuevo ingreso.
 *
 * @param {Object} data Información del ingreso.
 */
export const crearIngreso = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Actualiza un ingreso existente.
 *
 * @param {string} id Identificador del ingreso.
 * @param {Object} data Datos a actualizar.
 */
export const editarIngreso = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Elimina un ingreso.
 *
 * @param {string} id Identificador del ingreso.
 */
export const eliminarIngreso = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/ingresos/eliminar/${id}`, {
    method: "DELETE",
  });
};
