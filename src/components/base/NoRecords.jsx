const NoRecords = ({
  title = "No hay registros",
  description = "Crea el primer registro para comenzar",
}) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center py-12 border border-slate-200 rounded-2xl bg-white">
      <p className="text-sm font-medium text-slate-700">{title}</p>

      <p className="text-xs text-slate-500 mt-1 text-center">{description}</p>
    </div>
  );
};

export default NoRecords;
