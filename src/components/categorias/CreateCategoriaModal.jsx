import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";
import Select from "../base/Select";
import { CrearCategoriaMutation } from "../../queries/categorias";
import { useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoriaSchema } from "./ZodSchema";

const CreateModal = ({ onClose }) => {
  const crearCategoria = CrearCategoriaMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categoriaSchema),
  });

  const onSubmit = (data) => {
    crearCategoria.mutate(
      {
        ...data,
        user_id: "1",
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["categorias"] });
          onClose();
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      {/* MODAL */}
      <div
        className="
          relative w-full max-w-md
          bg-white
          rounded-2xl
          shadow-xl
          border border-slate-100
          p-6
          font-sans
        "
      >
        {/* HEADER */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Crear categoría
          </h2>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* NOMBRE */}
          <div className="space-y-2">
            <Label text="Nombre" required />
            <Input
              type="text"
              placeholder="Ej: Alimentación"
              variant="filled"
              {...register("name")}
              error={errors.name}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* TIPO */}
          <div className="space-y-2">
            <Label text="Tipo" required />
            <Select error={errors.type} {...register("type")}>
              <option value="">Seleccionar...</option>
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </Select>

            {errors.type && (
              <p className="text-xs text-red-500">{errors.type.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label text="Color" />

            <Input type="color" variant="color" {...register("color")} />
          </div>
          {/* ACTIONS */}
          <div className="pt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Crear categoría
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
