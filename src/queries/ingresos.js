import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ObtenerIngresos,
  crearIngreso,
  editarIngreso,
  eliminarIngreso,
} from "../services/IngresosService";

export const UseIngresos = (token) => {
  return useQuery({
    queryKey: ["ingresos"],
    queryFn: async () => {
      const response = await ObtenerIngresos(token);
      return response.json();
    },
  });
};

export const CrearIngresoMutation = () => {
  return useMutation({
    mutationFn: async ({ token, ...data }) => {
      const response = await crearIngreso(data, token);

      if (!response.ok) {
        throw new Error("Error al crear ingreso");
      }

      return response.json();
    },
  });
};

export const EditarIngresoMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data, token }) => {
      const response = await editarIngreso(_id, data, token);

      if (!response.ok) {
        throw new Error("Error al editar ingreso");
      }

      return true;
    },
  });
};

export const EliminarIngresoMutation = () => {
  return useMutation({
    mutationFn: async ({ id, token }) => {
      const response = await eliminarIngreso(id, token);

      if (!response.ok) {
        throw new Error("Error eliminando ingreso");
      }

      return true;
    },
  });
};
