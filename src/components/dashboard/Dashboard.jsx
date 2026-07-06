import DashboardHeader from "./DashboardHeader";
import SummaryCards from "./SummaryCards";
import IncomeExpenseChart from "./IncomeExpenseChart";
import RecentRecords from "./RecentRecords";
import { useState } from "react";

const Dashboard = () => {
  const [period, setPeriod] = useState("month");
  return (
    <div className="space-y-8">
      <DashboardHeader period={period} setPeriod={setPeriod} />

      {/* SummaryCards */}

      <SummaryCards period={period} />

      {/* IncomeExpenseChart */}
      <IncomeExpenseChart />

      {/* RecentTransactions */}

      <RecentRecords />
    </div>
  );
};

export default Dashboard;
