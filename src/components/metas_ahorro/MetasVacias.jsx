import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Button from "../base/Button";

const MetasVacias = ({ openModal }) => {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50">
        <CursorArrowRaysIcon className="h-10 w-10 text-teal-700" />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-slate-900">
        Aún no tienes metas de ahorro
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
        Crea tu primera meta y comienza a hacer seguimiento de tu progreso
        financiero.
      </p>

      <div className="mt-8">
        <Button onClick={openModal}>Crear primera meta</Button>
      </div>
    </section>
  );
};

export default MetasVacias;
