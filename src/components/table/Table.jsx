const Table = ({ th, data, openModal, Row, extra }) => {
  return (
    <div className="mt-6 bg-white border border-slate-200 rounded-2xl overflow-x-auto">
      <table className="w-full min-w-160 text-sm">
        <thead className="bg-slate-50 text-xs uppercase text-slate-500">
          <tr>
            {th?.map((item) => {
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
          {data?.map((obj) => (
            <Row key={obj._id} obj={obj} openModal={openModal} {...extra} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
