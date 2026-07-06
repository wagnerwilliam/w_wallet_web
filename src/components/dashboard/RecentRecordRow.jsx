import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

import { formatRelativeDate, formatEUR } from "../../utils/formatters";

const RecentRecordRow = ({ name, category, amount, date, type }) => {
  const income = type === "income";

  return (
    <div className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-slate-50 sm:px-6 sm:py-4">
      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11 lg:h-12 lg:w-12 ${
            income ? "bg-emerald-50" : "bg-rose-50"
          }`}
        >
          {income ? (
            <ArrowTrendingUpIcon className="h-5 w-5 text-emerald-600 sm:h-6 sm:w-6" />
          ) : (
            <ArrowTrendingDownIcon className="h-5 w-5 text-rose-600 sm:h-6 sm:w-6" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-900 sm:text-base">
            {name}
          </p>

          <p className="truncate text-xs text-slate-500 sm:text-sm">
            {formatRelativeDate(date)}
          </p>
        </div>
      </div>

      <div className="ml-3 shrink-0 text-right sm:ml-4">
        <p
          className={`text-sm font-medium sm:text-base ${
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
