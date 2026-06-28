import Button from "../base/Button";
import { MODALS } from "../utils/modals";
import { useState } from "react";

const IngresosRow = ({ obj, openModal }) => {
  let { _id, name, value, is_active, created_at, category_id } = obj;
  let [currentActive, setActive] = useState(is_active);

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const formatEUR = (value) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  };

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition">
      {/* NAME */}
      <td className="px-4 py-2 text-xs font-medium text-slate-900">{name}</td>

      {/* value */}
      <td className="px-4 py-2 text-xs text-slate-500">{formatEUR(value)}</td>

      <td className="px-4 py-2 text-xs text-slate-500">
        {formatDate(created_at)}
      </td>

      {/* categoria */}
      <td className="px-4 py-2 text-xs text-slate-500">{category_id}</td>

      {/* ESTADO */}
      <td className="px-4 py-2 text-xs">{is_active ? "Activo" : "Inactivo"}</td>

      {/* ACTIONS */}
      <td className="px-4 py-2 text-right">
        <div className="flex items-center justify-end gap-1">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => openModal(MODALS.UPDATE, obj)}
          >
            Editar
          </Button>
          <Button
            variant="logout"
            size="sm"
            onClick={() => openModal(MODALS.DELETE, obj)}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default IngresosRow;
