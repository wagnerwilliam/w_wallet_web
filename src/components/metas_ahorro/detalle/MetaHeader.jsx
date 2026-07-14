import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { formatDate } from "../../../utils/formatters";
import { useNavigate } from "react-router-dom";

const MetaHeader = ({ meta }) => {
  let { color, name, target_date } = meta;

  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/metas-ahorro")}
        className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-teal-700"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Volver
      </button>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{
              backgroundColor: `${color}20`,
            }}
          >
            <CursorArrowRaysIcon className="h-7 w-7" style={{ color: color }} />
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>

            <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
              <CalendarDaysIcon className="h-4 w-4" />
              {formatDate(target_date)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetaHeader;
