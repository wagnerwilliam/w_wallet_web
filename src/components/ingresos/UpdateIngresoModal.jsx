import Label from "../base/Label";
import Button from "../base/Button";
import Input from "../base/Input";
import Select from "../base/Select";
import { useQueryClient } from "@tanstack/react-query";
import CategoriaOptions from "../categorias/CategoriaOptions";
import { EditarIngresoMutation } from "../../queries/ingresos";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ingresoSchema } from "./ZodSchema";

import { useContext } from "react";
import Context from "../../context/Context";

const UpdateIngresoModal = ({ closeModal, ingreso }) => {
  let { _id, name, value, category_id } = ingreso;
  const { token } = useContext(Context);

  const editarIngreso = EditarIngresoMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(ingresoSchema),

    defaultValues: {
      name,
      value,
      category_id,
    },
  });

  const onSubmit = (data) => {
    if (!isDirty) return;

    editarIngreso.mutate(
      {
        _id,
        data,
        token,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["ingresos"] });
          closeModal();
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div onClick={closeModal} className="absolute inset-0 bg-black/40" />

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
            Editar ingreso
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Actualiza la información de este ingreso.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            <Label text="Monto" required />

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                €
              </span>

              <Input
                type="number"
                placeholder="0.00"
                variant="filled"
                min="0"
                step="0.01"
                className="pl-8"
                {...register("value")}
                error={errors.value}
              />
            </div>
            {errors.value && (
              <p className="text-xs text-red-500">{errors.value.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label text="Categoría" required />

            <Select error={errors.category_id} {...register("category_id")}>
              <option value="">Selecciona una categoría</option>

              <CategoriaOptions type="ingreso" />
            </Select>
            {errors.category_id && (
              <p className="text-xs text-red-500">
                {errors.category_id.message}
              </p>
            )}
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

export default UpdateIngresoModal;
