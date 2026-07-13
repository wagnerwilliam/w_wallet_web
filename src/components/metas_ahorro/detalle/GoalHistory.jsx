import GoalHistoryItem from "./GoalHistoryItem";
import GoalEmptyHistory from "./GoalEmptyHistory";

const GoalHistory = ({ movements = [] }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">Historial</h2>

        <p className="mt-1 text-sm text-slate-500">
          Todos los aportes realizados a esta meta.
        </p>
      </div>

      {movements.length === 0 ? (
        <GoalEmptyHistory />
      ) : (
        <div className="divide-y divide-slate-100">
          {movements.map((movement) => (
            <GoalHistoryItem key={movement._id} movement={movement} />
          ))}
        </div>
      )}
    </section>
  );
};

export default GoalHistory;
