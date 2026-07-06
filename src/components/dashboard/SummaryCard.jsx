import { formatEUR } from "../../utils/formatters";

const SummaryCard = ({ title, value, icon: Icon }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
          <Icon className="h-6 w-6 text-[#0F766E]" />
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-500">{title}</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {formatEUR(value ?? 0)}
        </h2>
      </div>
    </article>
  );
};

export default SummaryCard;
