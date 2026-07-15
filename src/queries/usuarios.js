import { useMutation, useQuery } from "@tanstack/react-query";

import { detalleUsuario, editarUsuario } from "../services/UsuariosService";

/**
 * Hooks de React Query para la gestión del perfil del usuario.
 *
 * Incluye consultas y mutaciones para obtener y actualizar
 * la información del usuario autenticado.
 */

/**
 * Obtiene la información del usuario autenticado.
 */
export const DetalleUsuario = () => {
  return useQuery({
    queryKey: ["usuarios"],
    queryFn: async () => {
      const response = await detalleUsuario();

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al obtener el detalle del usuario");
      }

      return response.json();
    },
  });
};

/**
 * Actualiza la información del perfil del usuario.
 */
export const EditarUsuarioMutation = () => {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await editarUsuario(formData);

      if (!response.ok) {
        throw new Error("Error al editar usuario");
      }

      return true;
    },
  });
};
