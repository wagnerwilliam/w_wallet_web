import { z } from "zod";

/** Expresión regular para validar nombres de usuario. */
const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,30}$/;

/** Expresión regular para validar direcciones de correo electrónico. */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Expresión regular para validar contraseñas seguras. */
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

/**
 * Esquema de validación para el registro de usuarios.
 */
export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, "El nombre de usuario es obligatorio")
      .regex(
        USERNAME_REGEX,
        "Debe tener entre 3 y 30 caracteres y solo puede contener letras, números y guiones bajos (_)",
      ),

    email: z
      .string()
      .min(1, "El email es obligatorio")
      .regex(EMAIL_REGEX, "Formato de email inválido"),

    password: z
      .string()
      .min(1, "La contraseña es obligatoria")
      .regex(
        PASSWORD_REGEX,
        "Debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número",
      ),

    confirm_password: z.string().min(1, "Confirma tu contraseña"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Las contraseñas no coinciden",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "El nombre de usuario es obligatorio")
    .regex(
      USERNAME_REGEX,
      "Debe tener entre 3 y 30 caracteres y solo puede contener letras, números y guiones bajos (_)",
    ),
  password: z
    .string()
    .min(1, "La contraseña es obligatoria")
    .regex(
      PASSWORD_REGEX,
      "Debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número",
    ),
});
