import { PlusIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Button from "../base/Button";

const MetasAhorroHeader = ({ openModal }) => {
  return (
    <section className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50">
            <CursorArrowRaysIcon className="h-6 w-6 text-teal-700" />
          </div>

          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 lg:text-[28px]">
              Metas de ahorro
            </h1>

            <p className="mt-1 text-sm text-slate-500 lg:text-[15px]">
              Define objetivos y sigue tu progreso hacia cada uno de ellos.
            </p>
          </div>
        </div>
      </div>

      <Button onClick={openModal}>
        <PlusIcon className="h-5 w-5" />
        Nueva meta
      </Button>
    </section>
  );
};

export default MetasAhorroHeader;
