import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

import { formatRelativeDate, formatEUR } from "../../utils/formatters";

const RecentRecordRow = ({ name, category, amount, date, type }) => {
  const income = type === "income";

  return (
    <div className="flex items-center justify-between px-4 py-4 transition-colors hover:bg-slate-50 sm:px-6">
      <div className="flex min-w-0 items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            income ? "bg-emerald-50" : "bg-rose-50"
          }`}
        >
          {income ? (
            <ArrowTrendingUpIcon className="h-6 w-6 text-emerald-600" />
          ) : (
            <ArrowTrendingDownIcon className="h-6 w-6 text-rose-600" />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate font-medium text-slate-900">{name}</p>

          <p className="truncate text-sm text-slate-500">
            {formatRelativeDate(date)}
          </p>
        </div>
      </div>

      <div className="ml-4 shrink-0 text-right">
        <p
          className={`text-lg font-semibold ${
            income ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {income ? "+" : "-"}
          {formatEUR(amount)}
        </p>
      </div>
    </div>
  );
};

export default RecentRecordRow;
