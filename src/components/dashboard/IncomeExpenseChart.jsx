import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const data = [
  {
    month: "Ene",
    ingresos: 4000,
    gastos: 2400,
  },
  {
    month: "Feb",
    ingresos: 3000,
    gastos: 1800,
  },
  {
    month: "Mar",
    ingresos: 5000,
    gastos: 3200,
  },
  {
    month: "Abr",
    ingresos: 4200,
    gastos: 2600,
  },
  {
    month: "May",
    ingresos: 6100,
    gastos: 4100,
  },
  {
    month: "Jun",
    ingresos: 5800,
    gastos: 3000,
  },
];

const IncomeExpenseChart = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Ingresos vs Gastos
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Comparación de los últimos 6 meses.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey="ingresos" fill="#0F766E" radius={[6, 6, 0, 0]} />

          <Bar dataKey="gastos" fill="#DC2626" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default IncomeExpenseChart;
