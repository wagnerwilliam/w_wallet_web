import PeriodSelector from "./PeriodSelector";

const DashboardHeader = ({ period, setPeriod }) => {
  return (
    <section className="flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Resumen financiero
        </h1>

        <p className="mt-2 text-slate-500">
          Visualiza el comportamiento de tus ingresos y gastos.
        </p>
      </div>

      <PeriodSelector value={period} onChange={setPeriod} />
    </section>
  );
};

export default DashboardHeader;
