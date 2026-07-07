import { z } from "zod";

export const profileSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(3, "El nombre completo debe tener al menos 3 caracteres.")
    .max(100, "El nombre completo no puede superar los 100 caracteres."),

  birth_date: z
    .string()
    .min(1, "La fecha de nacimiento es obligatoria.")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "La fecha de nacimiento no es válida.",
    ),
});
