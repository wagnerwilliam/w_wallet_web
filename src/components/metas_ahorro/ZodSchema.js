import { z } from "zod";

export const metasSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(60, "El nombre no puede superar los 60 caracteres"),

  target: z.coerce
    .number({
      invalid_type_error: "El objetivo debe ser un número",
    })
    .positive("El objetivo debe ser mayor que 0")
    .refine((val) => Number.isFinite(val), {
      message: "El objetivo debe ser un número válido",
    })
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: "Solo se permiten hasta 2 decimales",
    }),

  target_date: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.coerce.date().optional(),
  ),

  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, "Color inválido")
    .optional(),
});
