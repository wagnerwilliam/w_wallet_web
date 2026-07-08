import Label from "../base/Label";
import Button from "../base/Button";
import Input from "../base/Input";
import Select from "../base/Select";

import { EditarCategoriaMutation } from "../../queries/categorias";
import { useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoriaSchema } from "./ZodSchema";

import toast from "react-hot-toast";

const UpdateCategoriaModal = ({ closeModal, categoria }) => {
  let { _id, name, type, color } = categoria;

  const editarCategoria = EditarCategoriaMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(categoriaSchema),

    defaultValues: {
      name,
      type,
      color,
    },
  });

  const onSubmit = (data) => {
    if (!isDirty) return;

    editarCategoria.mutate(
      {
        _id,
        data,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["categorias"] });
          toast.success("Categoría actualizada correctamente.");
          closeModal();
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      {/* MODAL */}
      <div
        className="
            relative
            w-full
            max-w-md
            bg-white
            rounded-2xl
            shadow-xl
            border border-slate-100
            p-6
            font-sans
          "
      >
        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Editar categoría
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Actualiza la información de esta categoría.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label text="Nombre" required />
            <Input
              variant="filled"
              placeholder="Ej: Alimentación"
              {...register("name")}
              error={errors.name}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label text="Tipo" required />

            <Select {...register("type")} error={errors.type}>
              <option value="">Seleccionar...</option>
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </Select>
            {errors.type && (
              <p className="text-xs text-red-500">{errors.type.message}</p>
            )}
          </div>

          {/* COLOR */}
          <div className="space-y-2">
            <Label text="Color" />
            <Input
              type="color"
              variant="color"
              {...register("color")}
              error={errors.color}
            />
          </div>

          {/* ACTIONS */}
          <div className="pt-5 flex justify-end gap-2">
            <Button onClick={closeModal} variant="ghost" type="button">
              Cancelar
            </Button>

            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategoriaModal;
