import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  CursorArrowRaysIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import Button from "../base/Button";
import { formatEUR } from "../../utils/formatters";

const MetasAhorroDetalle = () => {
  const goal = { saved: 45, target: 45 };
  const percentage = Math.min(
    Math.round((goal.saved / goal.target) * 100),
    100,
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <button className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-teal-700">
        <ArrowLeftIcon className="h-4 w-4" />
        Volver
      </button>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
            <CursorArrowRaysIcon className="h-7 w-7 text-teal-700" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              {goal.name}
            </h1>

            <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <CalendarDaysIcon className="h-4 w-4" />
              {goal.targetDate}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Progreso</span>

            <span className="font-semibold text-teal-700">{percentage}%</span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-teal-700 transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <Stat title="Objetivo" value={formatEUR(goal.target)} />

          <Stat
            title="Ahorrado"
            value={formatEUR(goal.saved)}
            color="text-emerald-600"
          />

          <Stat title="Restante" value={formatEUR(goal.target - goal.saved)} />
        </div>

        <div className="mt-8">
          <Button
            width="w-full"
            className="flex items-center justify-center gap-2 py-3"
          >
            <PlusCircleIcon className="h-5 w-5" />
            Agregar ahorro
          </Button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-900">Actividad</h2>

          <p className="mt-1 text-sm text-slate-500">
            Últimos aportes realizados a esta meta.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {goal.movements?.map((movement) => (
            <div
              key={movement._id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div>
                <p className="font-medium text-slate-900">Aporte</p>

                <p className="text-sm text-slate-500">{movement.date}</p>
              </div>

              <span className="font-semibold text-emerald-600">
                +{formatEUR(movement.amount)}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Stat = ({ title, value, color = "text-slate-900" }) => (
  <div className="rounded-xl bg-slate-50 p-4 text-center">
    <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>

    <p className={`mt-2 text-lg font-semibold ${color}`}>{value}</p>
  </div>
);

export default MetasAhorroDetalle;
