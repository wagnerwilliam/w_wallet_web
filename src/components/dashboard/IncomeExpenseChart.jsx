import {
  ResponsiveContainer,
  AreaChart,
  Area,
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

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

const IncomeExpenseChart = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Ingresos vs Gastos
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Evolución financiera de los últimos 6 meses.
          </p>
        </div>
      </div>

      <div className="h-72 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 15,
              left: -15,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0F766E" stopOpacity={0.25} />

                <stop offset="95%" stopColor="#0F766E" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.2} />

                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#E2E8F0"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `€${value / 1000}k`}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <Tooltip
              formatter={(value) => formatCurrency(value)}
              contentStyle={{
                borderRadius: 14,
                border: "1px solid #E2E8F0",
                boxShadow: "0 12px 30px rgba(15,23,42,.08)",
              }}
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{
                paddingBottom: 20,
              }}
            />

            <Area
              type="monotone"
              dataKey="ingresos"
              name="Ingresos"
              stroke="#0F766E"
              strokeWidth={3}
              fill="url(#incomeGradient)"
              dot={{
                r: 4,
                fill: "#0F766E",
                strokeWidth: 2,
                stroke: "#fff",
              }}
              activeDot={{
                r: 6,
              }}
            />

            <Area
              type="monotone"
              dataKey="gastos"
              name="Gastos"
              stroke="#EF4444"
              strokeWidth={3}
              fill="url(#expenseGradient)"
              dot={{
                r: 4,
                fill: "#EF4444",
                strokeWidth: 2,
                stroke: "#fff",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default IncomeExpenseChart;
