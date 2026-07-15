import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import sonidoExito from "../../../assets/click.mp3";
import { UseDashboard } from "../../../queries/dashboard";
import { AgregarAhorroMutation } from "../../../queries/metas";
import { formatEUR } from "../../../utils/formatters";
import Button from "../../base/Button";
import Input from "../../base/Input";
import Label from "../../base/Label";
import { ahorroSchema } from "./ZodSchema";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

const AgregarAhorroModal = ({ closeModal, id }) => {
  const agregarAhorro = AgregarAhorroMutation();
  const { data: dashboard } = UseDashboard("month");
  const queryClient = useQueryClient();

  const available = dashboard?.summary?.saldo ?? 0;

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(ahorroSchema(available)),
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
          queryClient.invalidateQueries({
            queryKey: ["dashboard"],
          });
          queryClient.invalidateQueries({ queryKey: ["metas"] });
          toast.success("Ahorro agregado correctamente.");
          reproducirSonido();
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

          <div className="mt-4 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-cyan-700">
              Dinero disponible
            </p>

            <p className="mt-1 text-2xl font-bold text-cyan-800">
              {formatEUR(dashboard?.summary?.saldo ?? 0)}
            </p>

            <p className="mt-1 text-xs text-cyan-700">
              Este es el dinero disponible para destinar a tus metas este
              período.
            </p>
          </div>
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
