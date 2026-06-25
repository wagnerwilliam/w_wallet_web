import { useState } from "react";
import Button from "../base/Button";

const CreateCategoryModal = ({ open, setModal }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={() => setModal(false)}
        className="absolute inset-0 bg-black/40"
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
            Crear categoría
          </h2>
          <p className="text-sm text-slate-500">
            Organiza tus ingresos y gastos de forma clara
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          {/* NOMBRE */}
          <div>
            <label className="text-xs font-medium text-slate-600">Nombre</label>
            <input
              name="nombre"
              placeholder="Ej: Alimentación"
              className="
                mt-1 w-full
                px-4 py-2.5
                bg-slate-50
                border border-slate-200
                rounded-xl
                text-sm text-slate-700
                placeholder:text-slate-400
                focus:outline-none
                focus:border-[#0F766E]
                focus:ring-4
                focus:ring-[#0F766E]/10
              "
            />
          </div>

          {/* TIPO */}
          {/* <div>
            <label className="text-xs font-medium text-slate-600">
              Tipo
            </label>
            <select
              name="tipo"
              defaultValue={form.tipo}
              className="
                mt-1 w-full
                px-4 py-2.5
                bg-slate-50
                border border-slate-200
                rounded-xl
                text-sm text-slate-700
                focus:outline-none
                focus:border-[#0F766E]
                focus:ring-4
                focus:ring-[#0F766E]/10
              "
            >
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div> */}

          {/* ACTIONS */}
          <div className="pt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setModal(false)}
              className="
                px-4 py-2
                text-sm font-medium
                text-slate-600
                hover:bg-slate-100
                rounded-xl
                transition
              "
            >
              Cancelar
            </button>

            <Button variant="primary">Crear categoría</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal;
