import Button from "../../base/Button";
import Input from "../../base/Input";
import Label from "../../base/Label";
import { AgregarAhorroMutation } from "../../../queries/metas";
import { useQueryClient } from "@tanstack/react-query";
import { ahorroSchema } from "./ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const AgregarAhorroModal = ({ closeModal, id }) => {
  const agregarAhorro = AgregarAhorroMutation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(ahorroSchema),
    defaultValues: {
      amount: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    if (!isDirty) return;

    agregarAhorro.mutate(
      {
        id,
        data,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["metas"] });
          toast.success("Ahorro agregado correctamente.");
          closeModal();
        },
      },
    );
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      <div className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Agregar ahorro
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Registra un nuevo aporte para esta meta.
          </p>
        </div>

        <form className="space-y-5 p-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label text="Cantidad (€)" required />

            <Input
              type="number"
              variant="filled"
              min="0"
              step="0.01"
              placeholder="Ej: 150"
              {...register("saved")}
              error={errors.saved}
            />

            {errors.saved && (
              <p className="text-xs text-red-500">{errors.saved.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label text="Nota" />

            <Input
              variant="filled"
              placeholder="Ej: Pago extra de julio"
              {...register("description")}
              error={errors.description}
            />

            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="ghost" type="button" onClick={closeModal}>
              Cancelar
            </Button>

            <Button type="submit">Guardar aporte</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarAhorroModal;
