import { formatEUR } from "../../../utils/formatters";

const GoalStats = ({ goal }) => {
  const stats = [
    {
      title: "Objetivo",
      value: formatEUR(goal.target),
    },
    {
      title: "Ahorrado",
      value: formatEUR(goal.saved),
      color: "text-emerald-600",
    },
    {
      title: "Restante",
      value: formatEUR(goal.target - goal.saved),
    },
    {
      title: "Aportes",
      value: goal.totalMovements,
    },
  ];

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

export default GoalStats;
