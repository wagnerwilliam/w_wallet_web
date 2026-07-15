import { z } from "zod";

/**
 * Esquema de validación para el registro y edición de ingresos.
 */
export const ingresoSchema = z.object({
  name: z.string().min(1, "El concepto es obligatorio"),
  value: z.coerce
    .number({
      invalid_type_error: "El monto debe ser un número",
    })
    .positive("El monto debe ser mayor que 0")
    .refine((val) => Number.isFinite(val), {
      message: "El monto debe ser un número válido",
    })
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
      message: "El monto solo puede tener hasta 2 decimales",
    }),
  created_at: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.coerce.date().optional(),
  ),
  category_id: z.string().min(1, "La categoria es obligatoria"),
});
