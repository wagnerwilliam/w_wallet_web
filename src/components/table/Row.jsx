import Button from "../base/Button";

const Row = ({ categoria, openDeleteModal }) => {
  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition">
      {/* NAME */}
      <td className="px-4 py-2 text-xs font-medium text-slate-900">
        {categoria.name}
      </td>

      {/* TYPE */}
      <td className="px-4 py-2 text-xs text-slate-500">{categoria.type}</td>

      {/* COLOR */}
      <td className="px-4 py-2">
        <span
          className="w-2 h-2 rounded-full inline-block"
          style={{ backgroundColor: categoria.color }}
        />
      </td>

      <td className="px-4 py-2 text-xs text-slate-500">
        {categoria.is_active ? "Activa" : "Inactiva"}
      </td>

      {/* ACTIONS */}
      <td className="px-4 py-2 text-right">
        <div className="flex items-center justify-end gap-1">
          <Button variant="secondary" size="sm">
            Editar
          </Button>
          <Button
            variant="logout"
            size="sm"
            onClick={() => openDeleteModal(categoria)}
          >
            Eliminar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default Row;
