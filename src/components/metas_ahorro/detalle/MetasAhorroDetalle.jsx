import MetaHeader from "./MetaHeader";
import MetaProgress from "./MetaProgress";
import GoalStats from "./MetaStats";
import MetaActions from "./MetaActions";
import { UseMeta } from "../../../queries/metas";
import { useParams } from "react-router-dom";
import AgregarAhorroModal from "./AgregarAhorroModal";
import { useState } from "react";
import EditarMetaModal from "./EditarMetaModal";

const MetasAhorroDetalle = () => {
  let { id } = useParams();

  const { data: meta = [], isLoading, error } = UseMeta(id);
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
        <AgregarAhorroModal closeModal={closeAhorroModal} id={meta._id} />
      )}
      {editModal && <EditarMetaModal goal={meta} closeModal={closeEdit} />}
    </div>
  );
};

export default MetasAhorroDetalle;
