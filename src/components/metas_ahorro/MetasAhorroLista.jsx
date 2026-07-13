import MetasAhorroCard from "./MetasAhorroCard";
import MetasVacias from "./MetasVacias";
import MetaSkeleton from "./MetaSkeleton";

const MetasAhorroLista = ({ metas = [], isLoading = false, onView }) => {
  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <MetaSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (!metas.length) {
    return <MetasVacias />;
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {metas.map((meta) => (
        <MetasAhorroCard key={meta._id} meta={meta} />
      ))}
    </section>
  );
};

export default MetasAhorroLista;
