import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import sonidoExito from "../../assets/click.mp3";
import { EliminarGastoMutation } from "../../queries/gastos";
import Button from "../base/Button";

const reproducirSonido = () => {
  // 2. Creas la instancia de audio
  const audio = new Audio(sonidoExito);

  // 3. Opcional: Bajas el volumen (0.0 a 1.0) para que no asuste al usuario
  audio.volume = 0.3;

  // 4. Lo reproduces
  audio.play();
};

/**
 * Modal de confirmación para eliminar un gasto.
 *
 * Solicita la confirmación del usuario antes de eliminar el gasto
 * seleccionado y actualiza el listado al finalizar la operación.
 */
const DeleteGastoModal = ({ closeModal, gasto }) => {
  const eliminarGasto = EliminarGastoMutation();
  const queryClient = useQueryClient();

  const handleDelete = () =>
    eliminarGasto.mutate(gasto._id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["gastos"] });
        toast.success("Gasto eliminado correctamente.");
        reproducirSonido();
        closeModal();
      },
    });

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
          relative w-full max-w-md
          bg-white
          rounded-2xl
          shadow-xl
          border border-slate-100
          p-6
          font-sans
        "
      >
        {/* ICON HEADER */}
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#0F766E]/10 flex items-center justify-center">
            <span className="text-[#0F766E] text-lg font-bold">!</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
              Eliminar gasto
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Esta acción es permanente y no se puede deshacer
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-xs text-slate-500">Gasto seleccionado</p>

          <p className="text-sm font-semibold text-slate-900 mt-1">
            {gasto?.name}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={closeModal}>
            Cancelar
          </Button>

          <Button variant="danger" onClick={handleDelete}>
            Sí, eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteGastoModal;
