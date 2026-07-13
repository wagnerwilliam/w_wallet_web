import MetasAhorroHeader from "./MetasAhorroHeader";
import MetasAhorroResumen from "./MetasAhorroResumen";
import MetasAhorroLista from "./MetasAhorroLista";
import CreateMetaModal from "./CreateMetaModal";
import { useState } from "react";
import { UseMetas } from "../../queries/metas";

const MetasAhorro = () => {
  const { data: metas = [], isLoading, error } = UseMetas();

  let [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <MetasAhorroHeader openModal={openModal} />

      {/* Resumen */}
      <MetasAhorroResumen />

      {/* Metas */}
      <MetasAhorroLista metas={metas} />

      {modal && <CreateMetaModal closeModal={closeModal} />}
    </div>
  );
};
// contemplar usar unatabla summary para el resumen.

export default MetasAhorro;
