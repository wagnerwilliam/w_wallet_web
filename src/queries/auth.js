import { useMutation } from "@tanstack/react-query";
import { registrarUsurio } from "../services/AuthService";

export const RegistrarUsuarioMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await registrarUsurio(data);
      const result = await response.json();

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw result;
      }

      return result;
    },
  });
};
