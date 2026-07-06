import { ChevronDownIcon } from "@heroicons/react/24/outline";

const PeriodSelector = ({ value, onChange }) => {
  const options = [
    { value: "today", label: "Hoy" },
    { value: "week", label: "Esta semana" },
    { value: "month", label: "Este mes" },
    { value: "year", label: "Este año" },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <label className="block text-xs font-medium uppercase tracking-wide text-slate-400">
        Período
      </label>

      <div className="relative mt-1">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent pr-8 text-sm font-semibold text-slate-700 outline-none cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDownIcon className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
};

export default PeriodSelector;
