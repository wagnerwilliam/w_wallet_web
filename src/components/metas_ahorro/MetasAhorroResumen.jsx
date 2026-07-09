import {
  CursorArrowRaysIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import SummaryCard from "../dashboard/SummaryCard";

const MetasAhorroResumen = ({ summary = {} }) => {
  const cards = [
    {
      title: "Metas activas",
      value: summary.activeGoals ?? 0,
      icon: CursorArrowRaysIcon,
    },
    {
      title: "Ahorrado",
      value: summary.savedAmount ?? 0,
      icon: BanknotesIcon,
    },
    {
      title: "Pendiente",
      value: summary.remainingAmount ?? 0,
      icon: ClockIcon,
    },
    {
      title: "Completadas",
      value: summary.completedGoals ?? 0,
      icon: CheckBadgeIcon,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
        />
      ))}
    </section>
  );
};

export default MetasAhorroResumen;
