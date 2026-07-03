import { useMutation } from "@tanstack/react-query";
import { Register, Login, Logout } from "../services/AuthService";

export const RegistrarUsuarioMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await Register(data);
      const result = await response.json();

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw result;
      }

      return result;
    },
  });
};

export const LoginMutation = () => {
  return useMutation({
    mutationFn: async (data) => {
      const response = await Login(data);
      const result = await response.json();

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw result;
      }

      return result;
    },
  });
};

export const LogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await Logout();

      if (!response.ok) {
        // puede mejorarse esta respuest del backend.
        throw new Error("Error al hacer peticion logout");
      }

      return true;
    },
  });
};
