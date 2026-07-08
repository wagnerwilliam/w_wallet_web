import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

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
    .transform((value) => {
      // No seleccionó nada
      if (!value) return undefined;

      // FileList vacío
      if (value instanceof FileList) {
        if (value.length === 0) return undefined;
        return value[0];
      }

      // Ya es un File
      if (value instanceof File) {
        return value;
      }

      return undefined;
    })
    .refine(
      (file) => file === undefined || file.size <= MAX_FILE_SIZE,
      "La imagen debe pesar máximo 2 MB",
    )
    .refine(
      (file) => file === undefined || ACCEPTED_TYPES.includes(file.type),
      "Solo se permiten imágenes JPG, PNG o WEBP",
    ),
});
