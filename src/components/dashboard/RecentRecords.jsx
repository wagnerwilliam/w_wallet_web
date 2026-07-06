import RecentRecordRow from "./RecentRecordRow";

const RecentRecords = ({ recentRecords = [] }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Actividad reciente
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Últimos ingresos y gastos registrados.
          </p>
        </div>

        <button className="text-sm font-medium text-[#0F766E] hover:underline">
          Ver todos
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {recentRecords.length === 0 ? (
          <div className="px-6 py-10 text-center text-sm text-slate-500">
            No hay movimientos para este período.
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
