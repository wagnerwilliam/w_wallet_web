import { useMutation, useQuery } from "@tanstack/react-query";

import {
  crearCategoria,
  editarCategoria,
  eliminarCategoria,
  ObtenerCategorias,
} from "../services/CategoriasService";

/**
 * Hooks de React TanStack Query para la gestión de categorías.
 *
 * Incluye consultas y mutaciones para listar, crear, actualizar
 * y eliminar categorías.
 */

/**
 * Obtiene el listado de categorías.
 */
export const UseCategorias = () => {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: async () => {
      const response = await ObtenerCategorias();

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al obtener categorías");
      }
      return response.json();
    },
  });
};

/**
 * Obtiene las categorías activas filtradas por tipo.
 *
 * @param {string} type Tipo de categoría ("ingreso" o "gasto").
 */
export const UseCategoriasByType = (type) => {
  const { data = [], ...rest } = UseCategorias();
  const filtered = data?.filter((c) => c.type === type && c.is_active);

  return {
    ...rest,
    data: filtered,
  };
};

/**
 * Crea una nueva categoría.
 */
export const CrearCategoriaMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await crearCategoria(data);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al crear categoría");
      }

      return response.json();
    },
  });
};

/**
 * Actualiza una categoría existente.
 */
export const EditarCategoriaMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data }) => {
      const response = await editarCategoria(_id, data);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al editar categoría");
      }

      return true;
    },
  });
};

/**
 * Elimina una categoría.
 */
export const EliminarCategoriaMutation = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await eliminarCategoria(id);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error eliminando categoría");
      }

      return true;
    },
  });
};
