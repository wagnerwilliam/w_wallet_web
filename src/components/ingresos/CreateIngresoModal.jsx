import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import sonidoExito from "../../assets/click.mp3";
import { CrearIngresoMutation } from "../../queries/ingresos";
import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";
import Select from "../base/Select";
import Options from "../categorias/CategoriaOptions";
import { ingresoSchema } from "./ZodSchema";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

/**
 * Modal para crear un nuevo ingreso.
 *
 * Permite registrar un ingreso, validar la información ingresada
 * y actualizar el listado tras su creación.
 */
const CreateIngresoModal = ({ onClose }) => {
  const crearIngreso = CrearIngresoMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ingresoSchema),
  });

  const onSubmit = (data) => {
    crearIngreso.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["ingresos"] });
        toast.success("Ingreso creado correctamente.");
        reproducirSonido();
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

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
            Crear Ingreso
          </h2>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* NOMBRE */}
          <div className="space-y-2">
            <Label text="Concepto" required />
            <Input
              autoFocus
              type="text"
              placeholder="Ej: Pago de nómina"
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
                placeholder="0,00"
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
            <Label text="Fecha del ingreso" />

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
            {/* Quiza mostrar la categoria no sea necesario mejor buscar un mecanismo para que se envie automaticamente */}

            <Select error={errors.category_id} {...register("category_id")}>
              <option value="">Selecciona una categoría</option>

              <Options type="ingreso" />
            </Select>
            {errors.category_id && (
              <p className="text-xs text-red-500">
                {errors.category_id.message}
              </p>
            )}
          </div>

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

export default CreateIngresoModal;
