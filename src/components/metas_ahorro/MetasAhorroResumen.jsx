import {
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";

import { UseResumenMetas } from "../../queries/metas";
import { formatEUR } from "../../utils/formatters";
import SummaryCard from "../dashboard/SummaryCard";

const MetasAhorroResumen = () => {
  const { data: rersumenMetas = [] } = UseResumenMetas();

  const cards = [
    {
      title: "Metas activas",
      value: rersumenMetas.activeGoals ?? 0,
      icon: CursorArrowRaysIcon,
    },
    {
      title: "Ahorrado",
      value: rersumenMetas.savedAmount ?? 0,
      icon: BanknotesIcon,
      formatter: formatEUR,
    },
    {
      title: "Pendiente",
      value: rersumenMetas.remainingAmount ?? 0,
      icon: ClockIcon,
      formatter: formatEUR,
    },
    {
      title: "Completadas",
      value: rersumenMetas.completedGoals ?? 0,
      icon: CheckBadgeIcon,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard
          formatter={card.formatter}
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
