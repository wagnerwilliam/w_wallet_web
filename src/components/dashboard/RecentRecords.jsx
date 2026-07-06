import RecentRecordRow from "./RecentRecordRow";

const RecentRecords = ({ recentRecords = [] }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Actividad reciente
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Últimos ingresos y gastos registrados.
          </p>
        </div>

        <button className="hidden text-sm font-medium text-[#0F766E] transition hover:underline sm:block">
          Ver todos
        </button>
      </div>

      <div className="min-h-90 divide-y divide-slate-100">
        {recentRecords.length === 0 ? (
          <div className="flex h-72 items-center justify-center px-6 text-center">
            <p className="max-w-xs text-sm text-slate-500">
              No hay movimientos registrados para el período seleccionado.
            </p>
          </div>
        ) : (
          recentRecords.map((record) => (
            <RecentRecordRow
              key={record._id}
              name={record.name}
              category={record.category_id}
              amount={record.amount}
              date={record.created_at}
              type={record.type}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RecentRecords;
