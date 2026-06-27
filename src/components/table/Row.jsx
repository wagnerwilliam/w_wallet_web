import Button from "../base/Button";
import { MODALS } from "../utils/modals";
import { useState } from "react";
import { EditarCategoriaMutation } from "../../queries/categorias";

const Row = ({ categoria, openModal }) => {
  let { _id, name, type, color, is_active } = categoria;
  let [currentActive, setActive] = useState(is_active);
  const editarCategoria = EditarCategoriaMutation();

  const handleStatus = () => {
    setActive(!currentActive);
    editarCategoria.mutate({
      _id,
      data: {
        is_active: !currentActive,
      },
    });
  };

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition">
      {/* NAME */}
      <td className="px-4 py-2 text-xs font-medium text-slate-900">{name}</td>

      {/* TYPE */}
      <td className="px-4 py-2 text-xs text-slate-500">{type}</td>

      {/* COLOR */}
      <td className="px-4 py-2">
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{ backgroundColor: color }}
        />
      </td>

      <td className="px-4 py-2 text-xs text-slate-500">
        {/* este boton se puede usar con el componente de botones ya creado. */}
        <button
          type="button"
          onClick={handleStatus}
          className={`
            relative w-12 h-6 rounded-full transition
            ${currentActive ? "bg-[#0F766E]" : "bg-slate-300"}
          `}
        >
          <span
            className={`
              absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition
              ${currentActive ? "translate-x-6" : ""}
            `}
          />
        </button>
      </td>

      {/* ACTIONS */}
      <td className="px-4 py-2 text-right">
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => openModal(MODALS.UPDATE, categoria)}
          >
            Editar
          </Button>
          <Button
            variant="logout"
            size="sm"
            onClick={() => openModal(MODALS.DELETE, categoria)}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default Row;
