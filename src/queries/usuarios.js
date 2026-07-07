import { useQuery, useMutation } from "@tanstack/react-query";
import { detalleUsuario, editarUsuario } from "../services/UsuariosService";

export const DetalleUsuarioMutation = () => {
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

export const EditarUsuarioMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      console.log(data);
      const response = await editarUsuario(data);

      if (!response.ok) {
        throw new Error("Error al editar usuario");
      }

      return true;
    },
  });
};
