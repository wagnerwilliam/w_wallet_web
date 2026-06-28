import { useState } from "react";
import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";
import { useQueryClient } from "@tanstack/react-query";

const CreateIngresoModal = ({ onClose }) => {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [color, setColor] = useState("");
  const crearCategoria = CrearCategoriaMutation();
  const queryClient = useQueryClient();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   crearCategoria.mutate(
  //     {
  //       name,
  //       type,
  //       color,
  //       user_id: "1",
  //     },
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries({ queryKey: ["Ingresos"] });
  //         onClose();
  //       },
  //     },
  //   );
  // };

  // crearCategoria.mutate({
  //   data: {
  //     name,
  //     type,
  //     color,
  //     user_id: "1",
  //   },
  //   token,
  // });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

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
        </div>

        {/* FORM */}
        <form className="space-y-4">
          {/* NOMBRE */}
          <div className="space-y-2">
            <Label text="Nombre" />
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Alimentación"
              variant="filled"
            />
          </div>

          {/* TIPO */}
          <div>
            <label className="text-xs font-medium text-slate-600">Tipo</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="tipo"
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
              <option selected>Seleccionar...</option>
              <option value="ingreso">Ingreso</option>
              <option value="gasto">Gasto</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label text="Color" />

            <Input
              type="color"
              variant="color"
              name="color"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          {/* ACTIONS */}
          <div className="pt-4 flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Crear categoría
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIngresoModal;
