import { formatEUR } from "../../utils/formatters";

const SummaryCard = ({ title, value, icon: Icon }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md sm:p-5 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-2 wrap-break-words text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {formatEUR(value ?? 0)}
          </h2>
        </div>

        <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 sm:h-11 sm:w-11">
          <Icon className="h-5 w-5 text-[#0F766E] sm:h-6 sm:w-6" />
        </div>
      </div>
    </article>
  );
};

export default SummaryCard;
