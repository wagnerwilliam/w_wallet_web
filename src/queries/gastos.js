import { useQuery, useMutation } from "@tanstack/react-query";
import {
  obtenerGastos,
  crearGasto,
  editarGasto,
  eliminarGasto,
} from "../services/GastoService";

export const UseGastos = (token) => {
  return useQuery({
    queryKey: ["gastos"],
    queryFn: async () => {
      const response = await obtenerGastos(token);
      return response.json();
    },
  });
};

export const CrearGastoMutation = () => {
  return useMutation({
    mutationFn: async ({ token, ...data }) => {
      const response = await crearGasto(data, token);

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
    mutationFn: async ({ _id, data, token }) => {
      const response = await editarGasto(_id, data, token);

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
    mutationFn: async ({ id, token }) => {
      const response = await eliminarGasto(id, token);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error eliminando gasto");
      }

      return true;
    },
  });
};
