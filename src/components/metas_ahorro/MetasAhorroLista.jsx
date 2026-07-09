import MetasAhorroCard from "./MetasAhorroCard";
import MetasVacias from "./MetasVacias";
import MetaSkeleton from "./MetaSkeleton";

const MetasAhorroLista = ({ goals = [], isLoading = false, onView }) => {
  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <MetaSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (!goals.length) {
    return <MetasVacias />;
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {goals.map((goal) => (
        <MetasAhorroCard
          key={goal._id}
          goal={goal}
          onView={() => onView?.(goal)}
        />
      ))}
    </section>
  );
};

export default MetasAhorroLista;
