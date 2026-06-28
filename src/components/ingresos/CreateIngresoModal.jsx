import { useState } from "react";
import Button from "../base/Button";
import Input from "../base/Input";
import Label from "../base/Label";
import { useQueryClient } from "@tanstack/react-query";
import { CrearIngresoMutation } from "../../queries/ingresos";
import { UseCategoriasByType } from "../../queries/categorias";
import Options from "../categorias/CategoriaOptions";

const CreateIngresoModal = ({ onClose, categorias }) => {
  let [name, setName] = useState("");
  let [value, setValue] = useState("");
  let [category_id, setCategoryId] = useState("");
  let [user_id, setUserId] = useState("");

  const crearIngreso = CrearIngresoMutation();
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    crearIngreso.mutate(
      {
        name,
        value,
        category_id,
        user_id: "1",
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["ingresos"] });
          onClose();
        },
      },
    );
  };

  // crearIngreso.mutate({
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* NOMBRE */}
          <div className="space-y-2">
            <Label text="Concepto" />
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Pago proyecto web"
              variant="filled"
            />
          </div>

          {/* VALOR */}
          <div className="space-y-2">
            <Label text="Monto" />

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                €
              </span>

              <Input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="0.00"
                variant="filled"
                min="0"
                step="0.01"
                className="pl-8"
              />
            </div>
          </div>

          {/* CATEGORIAS */}
          <div className="space-y-2">
            <Label text="Categoría" />

            <select
              value={category_id}
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

              <Options type="ingreso" />
            </select>
          </div>

          {/* <div className="space-y-2">
            <Label text="Color" />

            <Input
              type="color"
              variant="color"
              name="color"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div> */}
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
