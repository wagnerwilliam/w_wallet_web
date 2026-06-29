import Button from "../base/Button";
import { MODALS } from "../../utils/modals";

import { UseCategoriasByType } from "../../queries/categorias";
import { categoriasMap } from "../../utils/categoriasMap";
import { formatDate, formatEUR } from "../../utils/formatters";

const IngresosRow = ({ obj, openModal }) => {
  let { name, value, is_active, created_at, category_id } = obj;

  const { data: categorias = [] } = UseCategoriasByType("ingreso");
  const mapCategorias = categoriasMap(categorias);

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
      <td className="px-4 py-2 text-xs text-slate-500">
        {mapCategorias?.[category_id] || "sin categoria"}
      </td>

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
