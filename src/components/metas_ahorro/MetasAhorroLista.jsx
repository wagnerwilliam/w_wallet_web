import MetasAhorroCard from "./MetasAhorroCard";
import MetaSkeleton from "./MetaSkeleton";
import MetasVacias from "./MetasVacias";

const MetasAhorroLista = ({ metas = [], isLoading = false, openModal }) => {
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
    return <MetasVacias openModal={openModal} />;
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
