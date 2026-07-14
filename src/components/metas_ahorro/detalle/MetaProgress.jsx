import { formatEUR } from "../../../utils/formatters";

const MetaProgress = ({ meta }) => {
  let { saved, target, color } = meta;
  const percentage = Math.min(Math.round((saved / target) * 100), 100);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-600">
          {formatEUR(saved)} de {formatEUR(target)}
        </span>

        <span className="font-semibold" style={{ color: color }}>
          {percentage}%
        </span>
      </div>

      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Te faltan{" "}
        <span className="font-semibold text-slate-900">
          {formatEUR(target - saved)}
        </span>
      </p>
    </section>
  );
};

export default MetaProgress;
