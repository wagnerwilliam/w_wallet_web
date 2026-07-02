import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ObtenerCategorias,
  crearCategoria,
  eliminarCategoria,
  editarCategoria,
} from "../services/CategoriasService";

export const UseCategorias = (token) => {
  return useQuery({
    queryKey: ["categorias"],
    queryFn: async () => {
      const response = await ObtenerCategorias(token);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al obtener categorías");
      }
      return response.json();
    },
  });
};

export const UseCategoriasByType = (type, token) => {
  const { data = [], ...rest } = UseCategorias(token);
  const filtered = data?.filter((c) => c.type === type && c.is_active);

  return {
    ...rest,
    data: filtered,
  };
};

export const CrearCategoriaMutation = () => {
  return useMutation({
    mutationFn: async ({ token, ...data }) => {
      const response = await crearCategoria(data, token);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al crear categoría");
      }

      return response.json();
    },
  });
};

export const EditarCategoriaMutation = () => {
  return useMutation({
    mutationFn: async ({ _id, data, token }) => {
      const response = await editarCategoria(_id, data, token);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al editar categoría");
      }

      return true;
    },
  });
};

export const EliminarCategoriaMutation = () => {
  return useMutation({
    mutationFn: async ({ id, token }) => {
      const response = await eliminarCategoria(id, token);

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error eliminando categoría");
      }

      return true;
    },
  });
};
