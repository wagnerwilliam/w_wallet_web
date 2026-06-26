import Row from "./Row";

const Table = ({ th, data, openDeleteModal }) => {
  return (
    <div className="mt-6 bg-white border border-slate-200 rounded-2xl overflow-x-auto">
      <table className="w-full min-w-160 text-sm">
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            {th.map((item) => {
              return (
                <th
                  key={item}
                  className={`px-4 py-3 ${item === "Acciones" ? "text-right" : "text-left"}`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {data.map((c, i) => (
            <Row key={i} categoria={c} openDeleteModal={openDeleteModal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
