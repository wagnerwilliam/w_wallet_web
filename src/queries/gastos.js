import { useQuery, useMutation } from "@tanstack/react-query";
import {
  obtenerGastos,
  crearGasto,
  editarGasto,
  eliminarGasto,
} from "../services/GastoService";

export const UseGastos = () => {
  return useQuery({
    queryKey: ["gastos"],
    queryFn: async () => {
      const response = await obtenerGastos();
      return response.json();
    },
  });
};

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
