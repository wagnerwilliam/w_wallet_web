import DashboardHeader from "./DashboardHeader";
import SummaryCards from "./SummaryCards";
import IncomeExpenseChart from "./IncomeExpenseChart";
import RecentRecords from "./RecentRecords";
import { useState } from "react";
import { UseDashboard } from "../../queries/dashboard";

const Dashboard = () => {
  const [period, setPeriod] = useState("month");
  const { data: resumen = [], isLoading, error } = UseDashboard(period);

  return (
    <div className="space-y-8">
      <DashboardHeader period={period} setPeriod={setPeriod} />

      {/* SummaryCards */}
      <SummaryCards resumen={resumen} />

      {/* RecentTransactions */}
      <RecentRecords recentRecords={resumen.recentRecords} />
    </div>
  );
};

export default Dashboard;
