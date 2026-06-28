import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ObtenerCategorias,
  crearCategoria,
  eliminarCategoria,
  editarCategoria,
} from "../services/CategoriasService";

export const UseCategorias = () => {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: async () => {
      const response = await ObtenerCategorias();
      return response.json();
    },
  });
};

export const UseCategoriasByType = (type) => {
  const { data = [], ...rest } = UseCategorias();
  console.log("UseCategoriasByType")

  const filtered = data?.filter((c) => c.type === type && c.is_active);

  return {
    ...rest,
    data: filtered,
  };
};

export const CrearCategoriaMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await crearCategoria(data);

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
