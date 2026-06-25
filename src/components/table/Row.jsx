import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { createPortal } from "react-dom";

import Button from "../base/Button";

const Row = ({ categoria }) => {
  const [open, setOpen] = useState(false);

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition">
      {/* NAME */}
      <td className="px-4 py-2 text-xs font-medium text-slate-900">
        {categoria.nombre}
      </td>

      {/* TYPE */}
      <td className="px-4 py-2 text-xs text-slate-500">{categoria.tipo}</td>

      {/* COLOR */}
      <td className="px-4 py-2">
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{ backgroundColor: categoria.color }}
        />
      </td>

      {/* ACTIONS */}
      <td className="px-4 py-2 text-right">
        <div className="flex items-center justify-end gap-1">
          <Button variant="secondary" size="sm">
            Editar
          </Button>
          <Button variant="logout" size="sm">
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default Row;
