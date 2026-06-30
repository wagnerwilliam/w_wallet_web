import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";
import { useQueryClient } from "@tanstack/react-query";
import { CrearGastoMutation } from "../../queries/gastos";
import Options from "../categorias/CategoriaOptions";
import Select from "../base/Select";

import { gastoSchema } from "./ZodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateGastoModal = ({ onClose }) => {
  const crearGasto = CrearGastoMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(gastoSchema),
  });

  const onSubmit = (data) => {
    crearGasto.mutate(
      {
        ...data,
        user_id: "6a4183c2fc249d8e995c77a3",
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["gastos"] });
          onClose();
        },
      },
    );
  };

  // crearIngreso.mutate({
  //   data: {
  //     name,
  //     type,
  //     color,
  //     user_id: "1",
  //   },
  //   token,
  // });

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
            Crear Gasto
          </h2>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* NOMBRE */}
          <div className="space-y-2">
            <Label text="Concepto" required />
            <Input
              placeholder="Ej: Pago de alquiler"
              variant="filled"
              {...register("name")}
              error={errors.name}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* VALOR */}
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

          {/* Fecha */}
          <div className="space-y-2">
            <Label text="Fecha del gasto" />

            <Input
              type="date"
              variant="filled"
              error={errors.date}
              {...register("created_at")}
            />

            {errors.date && (
              <p className="text-xs text-red-500">{errors.date.message}</p>
            )}
          </div>

          {/* CATEGORIAS */}
          <div className="space-y-2">
            <Label text="Categoría" required />

            <Select error={errors.category_id} {...register("category_id")}>
              <option value="">Selecciona una categoría</option>

              <Options type="gasto" />
            </Select>
            {errors.category_id && (
              <p className="text-xs text-red-500">
                {errors.category_id.message}
              </p>
            )}
          </div>

          {/* <div className="space-y-2">
            <Label text="Color" />

            <Input
              type="color"
              variant="color"
              name="color"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div> */}
          {/* ACTIONS */}
          <div className="pt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Crear Ingreso
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGastoModal;
