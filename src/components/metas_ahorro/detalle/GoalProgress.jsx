import { formatEUR } from "../../../utils/formatters";

const GoalProgress = ({ goal }) => {
  const percentage = Math.min(
    Math.round((goal.saved / goal.target) * 100),
    100,
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-600">
          {formatEUR(goal.saved)} de {formatEUR(goal.target)}
        </span>

        <span className="font-semibold" style={{ color: goal.color }}>
          {percentage}%
        </span>
      </div>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            backgroundColor: goal.color,
          }}
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Te faltan{" "}
        <span className="font-semibold text-slate-900">
          {formatEUR(goal.target - goal.saved)}
        </span>
      </p>
    </section>
  );
};

export default GoalProgress;
