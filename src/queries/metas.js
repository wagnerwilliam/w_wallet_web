import { useMutation, useQuery } from "@tanstack/react-query";

import {
  agregarAhorro,
  crearMeta,
  editarMeta,
  ObtenerMeta,
  ObtenerMetas,
  ObtenerResumenMetas,
} from "../services/MetasService";

/**
 * Hooks de React Query para la gestión de metas de ahorro.
 *
 * Incluye consultas y mutaciones para administrar metas,
 * registrar ahorros y obtener información resumida.
 */

/**
 * Obtiene el listado de metas del usuario.
 */
export const UseMetas = () => {
  return useQuery({
    queryKey: ["metas"],
    queryFn: async () => {
      const response = await ObtenerMetas();
      return response.json();
    },
  });
};

/**
 * Obtiene el resumen general de las metas de ahorro.
 */
export const UseResumenMetas = () => {
  return useQuery({
    queryKey: ["resumenMetas"],
    queryFn: async () => {
      const response = await ObtenerResumenMetas();
      return response.json();
    },
  });
};

/**
 * Crea una nueva meta de ahorro.
 */
export const CrearMetaMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await crearMeta(data);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al crear meta");
      }

      return response.json();
    },
  });
};

/**
 * Actualiza la información de una meta existente.
 */
export const EditarMetaMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data }) => {
      const response = await editarMeta(_id, data);

      if (!response.ok) {
        throw new Error("Error al editar meta");
      }

      return true;
    },
  });
};

/**
 * Registra un nuevo ahorro en una meta existente.
 */
export const AgregarAhorroMutation = () => {
  return useMutation({
    mutationFn: async ({ id, data }) => {
      const response = await agregarAhorro(id, data);

      if (!response.ok) {
        throw new Error("Error al agregar ahorro");
      }

      return true;
    },
  });
};

/**
 * Obtiene el detalle de una meta por su identificador.
 *
 * @param {string} id Identificador de la meta.
 */
export const UseMeta = (id) => {
  return useQuery({
    queryKey: ["metas", id],
    queryFn: async () => {
      const response = await ObtenerMeta(id);
      return response.json();
    },
  });
};
