import Button from "../base/Button";
import { useQueryClient } from "@tanstack/react-query";
import { EliminarCategoriaMutation } from "../../queries/categorias";
import { useContext } from "react";
import Context from "../../context/Context";

const DeleteCategoriaModal = ({ closeModal, categoria }) => {
  const eliminarCategoria = EliminarCategoriaMutation();
  const queryClient = useQueryClient();
  let { token } = useContext(Context);

  const handleDelete = () =>
    eliminarCategoria.mutate(
      { id: categoria._id, token },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["categorias"] });
          closeModal();
        },
      },
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div onClick={closeModal} className="absolute inset-0 bg-black/40" />

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
              Eliminar categoría
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Esta acción es permanente y no se puede deshacer
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <p className="text-xs text-slate-500">Categoría seleccionada</p>

          <p className="text-sm font-semibold text-slate-900 mt-1">
            {categoria?.name}
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

export default DeleteCategoriaModal;
