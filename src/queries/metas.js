import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ObtenerMetas,
  crearMeta,
  ObtenerMeta,
  editarMeta,
  agregarAhorro,
} from "../services/MetasService";

export const UseMetas = () => {
  return useQuery({
    queryKey: ["metas"],
    queryFn: async () => {
      const response = await ObtenerMetas();
      return response.json();
    },
  });
};

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

export const UseMeta = (id) => {
  return useQuery({
    queryKey: ["metas"],
    queryFn: async () => {
      const response = await ObtenerMeta(id);
      return response.json();
    },
  });
};
