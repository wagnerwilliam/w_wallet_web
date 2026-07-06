import PeriodSelector from "./PeriodSelector";

const DashboardHeader = ({ period, setPeriod }) => {
  return (
    <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Resumen financiero
        </h1>

        <p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-base">
          Visualiza el comportamiento de tus ingresos y gastos.
        </p>
      </div>

      <PeriodSelector value={period} onChange={setPeriod} />
    </section>
  );
};

export default DashboardHeader;
