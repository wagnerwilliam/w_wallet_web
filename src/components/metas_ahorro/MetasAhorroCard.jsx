import {
  CalendarDaysIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import { formatEUR, formatDate } from "../../utils/formatters";
import Button from "../base/Button";

const MetasAhorroCard = ({ meta }) => {
  const navigate = useNavigate();
  const percentage = Math.min(
    Math.round((meta.saved / meta.target) * 100),
    100,
  );

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
          <CursorArrowRaysIcon className="h-6 w-6 text-teal-700" />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-slate-900">
            {meta.name}
          </h3>

          <p className="text-xs text-slate-500">{percentage}% completado</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-teal-700 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Values */}
      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
        <div>
          <p className="text-xs text-slate-500">Objetivo</p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {formatEUR(meta.target)}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Ahorrado</p>

          <p className="mt-1 text-sm font-semibold text-emerald-600">
            {formatEUR(meta.saved)}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">Restante</p>

          <p className="mt-1 text-sm font-semibold text-slate-900">
            {formatEUR(meta.target - meta.saved)}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CalendarDaysIcon className="h-4 w-4" />

          {formatDate(meta.target_date)}
        </div>

        <Button
          variant="ghost"
          onClick={() => navigate(`/metas/detalle/${meta._id}`)}
        >
          Ver detalle
        </Button>
      </div>
    </article>
  );
};

export default MetasAhorroCard;
