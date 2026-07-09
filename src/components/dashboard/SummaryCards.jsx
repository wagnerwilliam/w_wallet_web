import SummaryCard from "./SummaryCard";
import { getSummaryCards } from "../../utils/dashboard/summaryCards";
import { formatEUR } from "../../utils/formatters";

const SummaryCards = ({ resumen }) => {
  const cards = getSummaryCards(resumen.summary);

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <SummaryCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          formatter={formatEUR}
        />
      ))}
    </section>
  );
};

export default SummaryCards;
