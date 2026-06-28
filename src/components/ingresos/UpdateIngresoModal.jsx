import Label from "../base/Label";
import Button from "../base/Button";
import Input from "../base/Input";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const UpdateIngresoModal = ({ closeModal, categoria }) => {
  let { _id, name, type, color } = categoria;
  let [currentName, setName] = useState(name);
  let [currentType, setType] = useState(type);
  let [currentColor, setColor] = useState(color);

  // const editarCategoria = EditarCategoriaMutation();
  // const queryClient = useQueryClient();

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   const data = {};
  //   currentName !== name ? (data.name = currentName) : null;
  //   currentType !== type ? (data.type = currentType) : null;
  //   currentColor !== color ? (data.color = currentColor) : null;
  //   if (Object.keys(data).length === 0) return;

  //   editarCategoria.mutate(
  //     {
  //       _id,
  //       data,
  //     },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries({ queryKey: ["Ingresos"] });
  //         closeModal();
  //       },
  //     },
  //   );
  // };

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
            Editar categoría
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Actualiza la información de esta categoría.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4">
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
            <Label text="Tipo" />

            <select
              value={currentType}
              onChange={(e) => setType(e.target.value)}
              className="
                  w-full
                  px-4
                  py-2.5
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-xl
                  text-sm
                  text-slate-700
                  focus:outline-none
                  focus:border-[#0F766E]
                  focus:ring-4
                  focus:ring-[#0F766E]/10
                "
            >
              <option value="">Seleccionar...</option>
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label text="Color" />

            <Input
              value={currentColor}
              onChange={(e) => setColor(e.target.value)}
              type="color"
              variant="color"
            />
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
