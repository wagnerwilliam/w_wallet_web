import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ObtenerIngresos,
  crearIngreso,
  editarIngreso,
  eliminarIngreso,
} from "../services/IngresosService";

export const UseIngresos = (period) => {
  return useQuery({
    queryKey: ["ingresos", period],
    queryFn: async () => {
      const response = await ObtenerIngresos(period);
      return response.json();
    },
  });
};

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
