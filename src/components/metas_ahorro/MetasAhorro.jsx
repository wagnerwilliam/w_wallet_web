import { useState } from "react";

import { UseMetas } from "../../queries/metas";
import CreateMetaModal from "./CreateMetaModal";
import MetasAhorroHeader from "./MetasAhorroHeader";
import MetasAhorroLista from "./MetasAhorroLista";
import MetasAhorroResumen from "./MetasAhorroResumen";

const MetasAhorro = () => {
  const { data: metas = [], isLoading } = UseMetas();

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
      <MetasAhorroLista
        metas={metas}
        isLoading={isLoading}
        openModal={openModal}
      />

      {modal && <CreateMetaModal closeModal={closeModal} />}
    </div>
  );
};
// contemplar usar unatabla summary para el resumen.

export default MetasAhorro;
