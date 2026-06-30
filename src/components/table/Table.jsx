const Table = ({ th, data, openModal, Row }) => {
  return (
    <div className="mt-6 bg-white border border-slate-200 rounded-2xl overflow-x-auto">
      <table className="w-full min-w-150 text-sm">
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            {th?.map((item) => {
              return (
                <th
                  key={item}
                  className={`px-3 sm:px-4 py-3 whitespace-nowrap ${item === "Acciones" ? "text-right" : "text-left"}`}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {data?.map((obj) => (
            <Row key={obj._id} obj={obj} openModal={openModal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
