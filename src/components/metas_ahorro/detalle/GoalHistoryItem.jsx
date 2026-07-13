import { BanknotesIcon } from "@heroicons/react/24/outline";

import { formatEUR } from "../../../utils/formatters";

const GoalHistoryItem = ({ movement }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
          <BanknotesIcon className="h-5 w-5 text-emerald-600" />
        </div>

        <div>
          <p className="font-medium text-slate-900">Aporte realizado</p>

          <p className="text-sm text-slate-500">{movement.date}</p>
        </div>
      </div>

      <span className="font-semibold text-emerald-600">
        +{formatEUR(movement.amount)}
      </span>
    </div>
  );
};

export default GoalHistoryItem;
