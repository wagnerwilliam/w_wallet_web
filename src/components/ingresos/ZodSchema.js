import { z } from "zod";

export const ingresoSchema = z.object({
  name: z.string().min(1, "El concepto es obligatorio"),
  value: z.coerce
    .number({
      invalid_type_error: "El monto debe ser un número",
    })
    .positive("El monto es obligatorio"),
  category_id: z.string().min(1, "La categoria es obligatoria"),
});
