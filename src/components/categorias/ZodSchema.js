import { z } from "zod";

export const categoriaSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  type: z.string().min(1, "El tipo es obligatorio"),
  color: z.string().optional(),
});
