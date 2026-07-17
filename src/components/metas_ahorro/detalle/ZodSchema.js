import { z } from "zod";

export const ahorroSchema = (available) =>
  z.object({
    saved: z.coerce
      .number({
        invalid_type_error: "El monto debe ser un número",
      })
      .positive("El monto debe ser mayor que 0")
      .max(available, `No puedes ahorrar más de ${available.toFixed(2)} €`),

    description: z
      .string()
      .trim()
      .min(1, "La motivo es obligatorio")
      .max(150, "La motivo no puede superar los 150 caracteres"),
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
