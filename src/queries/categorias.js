import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ObtenerCategorias,
  crearCategoria,
  eliminarCategoria,
  editarCategoria,
} from "../services/categorias/CategoriasService";

export const UseCategorias = () => {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: async () => {
      const response = await ObtenerCategorias();
      return response.json();
    },
  });
};

export const CrearCategoriaMutation = () => {
  return useMutation({
    mutationFn: async (data, token) => {
      const response = await crearCategoria(data, token);

      if (!response.ok) {
        throw new Error("Error al crear categoría");
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
