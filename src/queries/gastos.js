import { useMutation, useQuery } from "@tanstack/react-query";

import {
  crearGasto,
  editarGasto,
  eliminarGasto,
  obtenerGastos,
} from "../services/GastoService";

/**
 * Hooks de React Query para la gestión de gastos.
 *
 * Incluye consultas y mutaciones para listar, crear,
 * actualizar y eliminar gastos.
 */

/**
 * Obtiene el listado de gastos según el período seleccionado.
 *
 * @param {string} period Período de consulta (day, week, month, year, etc.).
 */
export const UseGastos = (period) => {
  return useQuery({
    queryKey: ["gastos", period],
    queryFn: async () => {
      const response = await obtenerGastos(period);
      return response.json();
    },
  });
};

/**
 * Crea un nuevo gasto.
 */
export const CrearGastoMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await crearGasto(data);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al crear gasto");
      }

      return response.json();
    },
  });
};

/**
 * Actualiza un gasto existente.
 */
export const EditarGastoMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data }) => {
      const response = await editarGasto(_id, data);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al editar gasto");
      }

      return true;
    },
  });
};

/**
 * Elimina un gasto.
 */
export const EliminarGastoMutation = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await eliminarGasto(id);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error eliminando gasto");
      }

      return true;
    },
  });
};
