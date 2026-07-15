import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";

import { formatEUR, formatRelativeDate } from "../../utils/formatters";

const RecentRecordRow = ({ name, amount, date, type }) => {
  const income = type === "income";
  const expense = type === "expense";

  const Icon = income
    ? ArrowTrendingUpIcon
    : expense
      ? ArrowTrendingDownIcon
      : BanknotesIcon;

  const iconStyles = income
    ? "bg-emerald-50 text-emerald-600"
    : expense
      ? "bg-rose-50 text-rose-600"
      : "bg-teal-50 text-teal-700";

  const amountStyles = income
    ? "text-emerald-600"
    : expense
      ? "text-rose-600"
      : "text-teal-700";

  const prefix = income ? "+" : expense ? "-" : "";

  return (
    <div className="flex items-center justify-between px-4 py-3 transition-colors duration-150 hover:bg-slate-50 sm:px-5 sm:py-3.5">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconStyles}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-900">{name}</p>

          <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500">
            <span>{formatRelativeDate(date)}</span>
          </div>
        </div>
      </div>

      <div className="ml-4 shrink-0 text-right">
        <p className={`text-sm font-semibold lg:text-base ${amountStyles}`}>
          {prefix}
          {formatEUR(amount)}
        </p>
      </div>
    </div>
  );
};

export default RecentRecordRow;
