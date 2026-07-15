import { useMutation } from "@tanstack/react-query";

import { Login, Logout, Register } from "../services/AuthService";

/**
 * Hooks de React Query para la autenticación.
 *
 * Centralizan las operaciones de registro, inicio de sesión y cierre
 * de sesión, gestionando el estado de las mutaciones.
 */

/**
 * Registra un nuevo usuario.
 */
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

/**
 * Inicia sesión y devuelve el token de acceso.
 */
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

/**
 * Cierra la sesión del usuario autenticado.
 */
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
