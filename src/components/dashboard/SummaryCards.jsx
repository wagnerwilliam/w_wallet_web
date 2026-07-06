import SummaryCard from "./SummaryCard";
import { UseDashboard } from "../../queries/dashboard";
import { getSummaryCards } from "../../utils/dashboard/summaryCards";

const SummaryCards = ({ period }) => {
  const { data: resumen = [], isLoading, error } = UseDashboard(period);

  const cards = getSummaryCards(resumen);

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
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

export default SummaryCards;
