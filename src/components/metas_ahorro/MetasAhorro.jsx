import MetasAhorroHeader from "./MetasAhorroHeader";
import MetasAhorroResumen from "./MetasAhorroResumen";
import MetasAhorroLista from "./MetasAhorroLista";

const MetasAhorro = () => {
  let goals = [
    { name: "william", target: 50, saved: 15, targetDate: "2020-11-23" },
    { name: "prueba 2", target: 1100, saved: 450, targetDate: "2020-11-23" },
    { name: "prueba 3", target: 50, saved: 45, targetDate: "2020-11-23" },
  ];
  return (
    <div className="space-y-8">
      {/* Header */}
      <MetasAhorroHeader />

      {/* Resumen */}
      <MetasAhorroResumen />

      {/* Metas */}
      <MetasAhorroLista goals={goals} />
    </div>
  );
};
// contemplar usar unatabla summary para el resumen.

export default MetasAhorro;
