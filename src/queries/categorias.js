import { useQuery, useMutation } from "@tanstack/react-query";
import { ObtenerCategorias } from "../services/categorias/CategoriasService";
import { crearCategoria } from "../services/categorias/CategoriasService";
import { eliminarCategoria } from "../services/categorias/CategoriasService";

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
    mutationFn: async (data) => {
      const response = await crearCategoria(data);

      if (!response.ok) {
        throw new Error("Error al crear categoría");
      }

      return response.json();
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
