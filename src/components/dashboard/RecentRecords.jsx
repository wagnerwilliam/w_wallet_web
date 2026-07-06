import RecentRecordRow from "./RecentRecordRow";

const RecentRecords = () => {
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

      {/* Body */}
      <div className="divide-y divide-slate-100">
        <RecentRecordRow
          name="Salario"
          category="Trabajo"
          amount={2500000}
          date="Hoy"
          type="income"
        />

        <RecentRecordRow
          name="Netflix"
          category="Entretenimiento"
          amount={35000}
          date="Ayer"
          type="expense"
        />

        <RecentRecordRow
          name="Mercado Éxito"
          category="Alimentación"
          amount={180000}
          date="2 Jul"
          type="expense"
        />
      </div>
    </section>
  );
};

export default RecentRecords;
