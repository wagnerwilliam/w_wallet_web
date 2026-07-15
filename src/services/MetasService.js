import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Servicios para la gestión de metas de ahorro.
 *
 * Centraliza las peticiones HTTP relacionadas con la consulta,
 * creación, actualización y registro de ahorros en las metas.
 */

/**
 * Obtiene el listado de metas del usuario.
 */
export const ObtenerMetas = async () => {
  return await apiFetch(`${BACKEND_URL}api/metas/`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Obtiene el detalle de una meta.
 *
 * @param {string} id Identificador de la meta.
 */
export const ObtenerMeta = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/metas/detalle/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Obtiene el resumen de las metas de ahorro.
 */
export const ObtenerResumenMetas = async () => {
  return await apiFetch(`${BACKEND_URL}api/metas/resumen`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Crea una nueva meta de ahorro.
 *
 * @param {Object} data Información de la meta.
 */
export const crearMeta = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/metas/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Actualiza una meta existente.
 *
 * @param {string} _id Identificador de la meta.
 * @param {Object} data Datos a actualizar.
 */
export const editarMeta = async (_id, data) => {
  return await apiFetch(`${BACKEND_URL}api/metas/editar/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Registra un nuevo ahorro en una meta.
 *
 * @param {string} id Identificador de la meta.
 * @param {Object} data Información del ahorro.
 */
export const agregarAhorro = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/metas/agregar-ahorro/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
