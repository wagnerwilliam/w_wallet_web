import { useQuery, useMutation } from "@tanstack/react-query";
import { ObtenerIngresos, crearIngreso } from "../services/IngresosService";

export const UseIngresos = () => {
  return useQuery({
    queryKey: ["ingresos"],
    queryFn: async () => {
      const response = await ObtenerIngresos();
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

export const EditarCategoriaMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data }) => {
      const response = await editarCategoria(_id, data);

      if (!response.ok) {
        throw new Error("Error al editar categoría");
      }

      return true;
    },
  });
};

export const EliminarCategoriaMutation = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await eliminarCategoria(id);

      if (!response.ok) {
        throw new Error("Error eliminando categoría");
      }

      return true;
    },
  });
};
