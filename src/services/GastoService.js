import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Servicios para la gestión de gastos.
 *
 * Centraliza las peticiones HTTP relacionadas con la consulta,
 * creación, actualización y eliminación de gastos.
 */

/**
 * Obtiene el listado de gastos según el período indicado.
 *
 * @param {string} period Período de consulta (day, week, month, year, etc.).
 */
export const obtenerGastos = async (period) => {
  return await apiFetch(`${BACKEND_URL}api/gastos?period=${period}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Crea un nuevo gasto.
 *
 * @param {Object} data Información del gasto.
 */
export const crearGasto = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/gastos/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Actualiza un gasto existente.
 *
 * @param {string} id Identificador del gasto.
 * @param {Object} data Datos a actualizar.
 */
export const editarGasto = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/gastos/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Elimina un gasto.
 *
 * @param {string} id Identificador del gasto.
 */
export const eliminarGasto = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/gastos/eliminar/${id}`, {
    method: "DELETE",
  });
};
