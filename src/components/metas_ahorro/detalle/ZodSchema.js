import { z } from "zod";

export const ahorroSchema = z.object({
  saved: z.coerce
    .number({
      invalid_type_error: "La cantidad debe ser un número",
    })
    .positive("La cantidad debe ser mayor que 0")
    .refine((val) => Number.isFinite(val), {
      message: "La cantidad debe ser un número válido",
    })
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: "La cantidad solo puede tener hasta 2 decimales",
    }),

  description: z
    .string()
    .trim()
    .max(120, "La descripción no puede superar los 120 caracteres")
    .optional()
    .or(z.literal("")),
});

export const editarMetaSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
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
    .regex(/^#[0-9A-Fa-f]{6}$/, "Selecciona un color válido")
    .optional(),
});
