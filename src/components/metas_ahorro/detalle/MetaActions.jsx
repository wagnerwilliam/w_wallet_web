import { PlusCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

import Button from "../../base/Button";

const MetaActions = ({ openAhorroModal, openEdit }) => {
  return (
    <section className="flex flex-col gap-3 sm:flex-row">
      <Button
        width="w-full"
        className="flex items-center justify-center gap-2"
        onClick={openAhorroModal}
      >
        <PlusCircleIcon className="h-5 w-5" />
        Agregar ahorro
      </Button>

      <Button
        variant="ghost"
        width="w-full"
        className="flex items-center justify-center gap-2"
        onClick={openEdit}
      >
        <PencilSquareIcon className="h-5 w-5" />
        Editar meta
      </Button>
    </section>
  );
};

export default MetaActions;
