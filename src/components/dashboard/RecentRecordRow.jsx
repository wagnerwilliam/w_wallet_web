import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const RecentRecordRow = ({ name, amount, date, type }) => {
  const income = type === "income";

  return (
    <div className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-slate-50">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            income ? "bg-emerald-50" : "bg-rose-50"
          }`}
        >
          {income ? (
            <ArrowTrendingUpIcon className="h-5 w-5 text-emerald-600" />
          ) : (
            <ArrowTrendingDownIcon className="h-5 w-5 text-rose-600" />
          )}
        </div>

        <div>
          <p className="font-medium text-slate-900">{name}</p>

          <p className="text-sm text-slate-500">{date}</p>
        </div>
      </div>

      <p
        className={`text-base font-semibold ${
          income ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        {income ? "+" : "-"}${amount.toLocaleString()}
      </p>
    </div>
  );
};

export default RecentRecordRow;
