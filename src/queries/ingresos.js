import { useMutation, useQuery } from "@tanstack/react-query";

import {
  crearIngreso,
  editarIngreso,
  eliminarIngreso,
  ObtenerIngresos,
} from "../services/IngresosService";

/**
 * Hooks de React Query para la gestión de ingresos.
 *
 * Incluye consultas y mutaciones para listar, crear,
 * actualizar y eliminar ingresos.
 */

/**
 * Obtiene el listado de ingresos según el período seleccionado.
 *
 * @param {string} period Período de consulta (day, week, month, year, etc.).
 */
export const UseIngresos = (period) => {
  return useQuery({
    queryKey: ["ingresos", period],
    queryFn: async () => {
      const response = await ObtenerIngresos(period);
      return response.json();
    },
  });
};

/**
 * Crea un nuevo ingreso.
 */
export const CrearIngresoMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await crearIngreso(data);

      if (!response.ok) {
        throw new Error("Error al crear ingreso");
      }

      return response.json();
    },
  });
};

/**
 * Actualiza un ingreso existente.
 */
export const EditarIngresoMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data }) => {
      const response = await editarIngreso(_id, data);

      if (!response.ok) {
        throw new Error("Error al editar ingreso");
      }

      return true;
    },
  });
};

/**
 * Elimina un ingreso.
 */
export const EliminarIngresoMutation = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await eliminarIngreso(id);

      if (!response.ok) {
        throw new Error("Error eliminando ingreso");
      }

      return true;
    },
  });
};
