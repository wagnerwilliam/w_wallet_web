import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { metasSchema } from "./ZodSchema";
import { CrearMetaMutation } from "../../queries/metas";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const CreateMetaModal = ({ closeModal }) => {
  const crearMeta = CrearMetaMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(metasSchema),
  });

  const onSubmit = (data) => {
    crearMeta.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["metas"] });
        toast.success("Meta creada correctamente.");
        closeModal();
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Nueva meta de ahorro
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Crea un objetivo y comienza a ahorrar poco a poco.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
          {/* Nombre */}
          <div className="space-y-2">
            <Label text="Nombre" required />
            <Input
              variant="filled"
              placeholder="Ej: Viaje a Japón"
              {...register("name")}
              error={errors.name}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Objetivo */}
          <div className="space-y-2">
            <Label text="Objetivo (€)" required />
            <Input
              type="number"
              variant="filled"
              placeholder="Ej: 5000"
              {...register("target")}
              error={errors.target}
            />
            {errors.target && (
              <p className="text-xs text-red-500">{errors.target.message}</p>
            )}
          </div>

          {/* Fecha */}
          <div className="space-y-2">
            <Label text="Fecha objetivo" required />
            <Input
              type="date"
              variant="filled"
              {...register("target_date")}
              error={errors.target_date}
            />
            {errors.target_date && (
              <p className="text-xs text-red-500">
                {errors.target_date.message}
              </p>
            )}
          </div>

          {/* Color */}
          <div className="space-y-2">
            <Label text="Color" />
            <Input type="color" variant="color" {...register("color")} />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="ghost" type="button" onClick={closeModal}>
              Cancelar
            </Button>

            <Button type="submit">Crear meta</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMetaModal;
