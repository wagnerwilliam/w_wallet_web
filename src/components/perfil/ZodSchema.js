import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const profileSchema = z.object({
  full_name: z
    .string()
    .min(3, "El nombre completo debe tener al menos 3 caracteres."),

  birth_date: z
    .string()
    .min(1, "La fecha de nacimiento es obligatoria.")
    .refine(
      (value) => !Number.isNaN(Date.parse(value)),
      "La fecha de nacimiento no es válida.",
    ),
  photo: z
    .any()
    .optional()
    .transform((files) => (files?.length ? files[0] : undefined))
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "La imagen debe pesar máximo 2 MB",
    )
    .refine(
      (file) => !file || ACCEPTED_TYPES.includes(file.type),
      "Solo se permiten imágenes JPG, PNG o WEBP",
    ),
});
