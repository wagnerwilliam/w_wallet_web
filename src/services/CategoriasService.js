import { apiFetch } from "./ApiFetch";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Servicios para la gestión de categorías.
 *
 * Centraliza las peticiones HTTP relacionadas con la consulta,
 * creación, actualización y eliminación de categorías.
 */

/**
 * Obtiene el listado de categorías del usuario.
 */
export const ObtenerCategorias = async () => {
  return await apiFetch(`${BACKEND_URL}api/categorias/`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

/**
 * Crea una nueva categoría.
 */
export const crearCategoria = async (data) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/crear`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Actualiza una categoría existente.
 *
 * @param {string} id Identificador de la categoría.
 * @param {Object} data Datos a actualizar.
 */
export const editarCategoria = async (id, data) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/editar/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/**
 * Elimina una categoría.
 *
 * @param {string} id Identificador de la categoría.
 */
export const eliminarCategoria = async (id) => {
  return await apiFetch(`${BACKEND_URL}api/categorias/eliminar/${id}`, {
    method: "DELETE",
  });
};
