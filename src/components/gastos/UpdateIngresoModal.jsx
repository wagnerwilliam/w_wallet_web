import Label from "../base/Label";
import Button from "../base/Button";
import Input from "../base/Input";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CategoriaOptions from "../categorias/CategoriaOptions";
import { EditarIngresoMutation } from "../../queries/ingresos";

const UpdateIngresoModal = ({ closeModal, ingreso }) => {
  let { _id, name, value, category_id } = ingreso;

  let [currentName, setName] = useState(name);
  let [currentValue, setValue] = useState(value);
  let [currentCategory, setCategoryId] = useState(category_id);

  const editarIngreso = EditarIngresoMutation();
  const queryClient = useQueryClient();

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {};
    currentName !== name ? (data.name = currentName) : null;
    currentValue !== value ? (data.value = currentValue) : null;
    currentCategory !== category_id
      ? (data.category_id = currentCategory)
      : null;
    if (Object.keys(data).length === 0) return;

    editarIngreso.mutate(
      {
        _id,
        data,
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
        <form className="space-y-4" onSubmit={handleUpdate}>
          <div className="space-y-2">
            <Label text="Nombre" />

            <Input
              value={currentName}
              onChange={(e) => setName(e.target.value)}
              variant="filled"
              placeholder="Ej: Alimentación"
            />
          </div>

          <div className="space-y-2">
            <Label text="Monto" />

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                €
              </span>

              <Input
                type="number"
                value={currentValue}
                onChange={(e) => setValue(e.target.value)}
                placeholder="0.00"
                variant="filled"
                min="0"
                step="0.01"
                className="pl-8"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label text="Categoría" />

            <select
              value={currentCategory}
              onChange={(e) => setCategoryId(e.target.value)}
              className="
                w-full
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
              <option value="">Selecciona una categoría</option>

              <CategoriaOptions type="ingreso" />
            </select>
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
