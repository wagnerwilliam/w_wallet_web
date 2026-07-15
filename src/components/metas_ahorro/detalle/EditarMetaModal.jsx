import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import sonidoExito from "../../../assets/click.mp3";
import { EditarMetaMutation } from "../../../queries/metas";
import Button from "../../base/Button";
import Input from "../../base/Input";
import Label from "../../base/Label";
import { editarMetaSchema } from "./ZodSchema";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

const EditarMetaModal = ({ goal, closeModal }) => {
  const editarMeta = EditarMetaMutation();
  const queryClient = useQueryClient();
  let { _id, name, target, target_date, color } = goal;

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(editarMetaSchema),

    defaultValues: {
      name,
      target,
      target_date,
      color,
    },
  });

  const onSubmit = (data) => {
    if (!isDirty) return;

    editarMeta.mutate(
      {
        _id,
        data,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["metas"] });
          toast.success("Meta editada correctamente.");
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

      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">Editar meta</h2>

          <p className="mt-1 text-sm text-slate-500">
            Actualiza la información de tu objetivo.
          </p>
        </div>

        <form className="space-y-5 p-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label text="Nombre" required />

            <Input variant="filled" {...register("name")} error={errors.name} />
          </div>

          <div className="space-y-2">
            <Label text="Objetivo (€)" required />

            <Input
              type="number"
              variant="filled"
              {...register("target")}
              error={errors.target}
            />
          </div>

          <div className="space-y-2">
            <Label text="Color" />

            <Input
              type="color"
              variant="color"
              {...register("color")}
              error={errors.color}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="ghost" type="button" onClick={closeModal}>
              Cancelar
            </Button>

            <Button type="submit">Guardar cambios</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditarMetaModal;
