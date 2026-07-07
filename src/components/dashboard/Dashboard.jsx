import DashboardHeader from "./DashboardHeader";
import SummaryCards from "./SummaryCards";
import RecentRecords from "./RecentRecords";

import SummaryCardsSkeleton from "./SummaryCardsSkeleton";
import RecentRecordsSkeleton from "./RecentRecordsSkeleton";
import { useState } from "react";
import { UseDashboard } from "../../queries/dashboard";

const Dashboard = () => {
  const [period, setPeriod] = useState("month");

  const { data: resumen = {}, isLoading } = UseDashboard(period);

  return (
    <div className="space-y-8">
      <DashboardHeader period={period} setPeriod={setPeriod} />

      {isLoading ? (
        <>
          <SummaryCardsSkeleton />

          <RecentRecordsSkeleton />
        </>
      ) : (
        <>
          <SummaryCards resumen={resumen} />

          <RecentRecords recentRecords={resumen.recentRecords} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
