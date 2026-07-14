import { formatEUR } from "../../../utils/formatters";
import { getStats } from "../../../utils/metas_ahorro/stats";

const MetaStats = ({ meta }) => {
  const stats = getStats(meta);

  return (
    <section className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {stat.title}
          </p>

          <h3
            className={`mt-2 text-xl font-semibold ${
              stat.color ?? "text-slate-900"
            }`}
          >
            {stat.value}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default MetaStats;
