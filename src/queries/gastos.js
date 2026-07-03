import { useQuery, useMutation } from "@tanstack/react-query";
import {
  obtenerGastos,
  crearGasto,
  editarGasto,
  eliminarGasto,
} from "../services/GastoService";

export const UseGastos = (accessToken) => {
  return useQuery({
    queryKey: ["gastos"],
    queryFn: async () => {
      const response = await obtenerGastos(accessToken);
      return response.json();
    },
  });
};

export const CrearGastoMutation = () => {
  return useMutation({
    mutationFn: async ({ accessToken, ...data }) => {
      const response = await crearGasto(data, accessToken);

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
    mutationFn: async ({ _id, data, accessToken }) => {
      const response = await editarGasto(_id, data, accessToken);

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
    mutationFn: async ({ id, accessToken }) => {
      const response = await eliminarGasto(id, accessToken);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error eliminando gasto");
      }

      return true;
    },
  });
};
