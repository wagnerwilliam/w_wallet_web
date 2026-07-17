import { useState } from "react";
import { useParams } from "react-router-dom";

import { UseMeta } from "../../../queries/metas";
import AgregarDineroModal from "./AgregarDineroModal";
import EditarMetaModal from "./EditarMetaModal";
import MetaActions from "./MetaActions";
import MetaHeader from "./MetaHeader";
import MetaProgress from "./MetaProgress";
import GoalStats from "./MetaStats";

const MetasAhorroDetalle = () => {
  let { id } = useParams();

  const { data: meta = [] } = UseMeta(id);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const openAhorroModal = () => {
    setModal(true);
  };

  const closeAhorroModal = () => {
    setModal(false);
  };

  const openEdit = () => {
    setEditModal(true);
  };

  const closeEdit = () => {
    setEditModal(false);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <MetaHeader meta={meta} />

      <MetaProgress meta={meta} />

      <GoalStats meta={meta} />

      <MetaActions openAhorroModal={openAhorroModal} openEdit={openEdit} />

      {modal && (
        <AgregarDineroModal closeModal={closeAhorroModal} id={meta._id} />
      )}
      {editModal && <EditarMetaModal goal={meta} closeModal={closeEdit} />}
    </div>
  );
};

export default MetasAhorroDetalle;
