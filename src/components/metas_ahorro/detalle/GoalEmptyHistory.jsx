import { BanknotesIcon } from "@heroicons/react/24/outline";

const GoalEmptyHistory = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
        <BanknotesIcon className="h-8 w-8 text-slate-400" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-900">
        Sin movimientos
      </h3>

      <p className="mt-2 max-w-sm text-center text-sm text-slate-500">
        Todavía no has realizado aportes para esta meta.
      </p>
    </div>
  );
};

export default GoalEmptyHistory;
