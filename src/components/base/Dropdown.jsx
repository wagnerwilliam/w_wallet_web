import Button from "./Button";

const DropDown = () => {
  return (
    <div
      className="
      absolute right-0 mt-3 w-56

      bg-white/90 backdrop-blur-md
      border border-slate-200
      rounded-xl shadow-lg

      overflow-hidden
      font-sans
    "
    >
      {/* USER INFO (opcional nivel pro) */}
      <div className="px-4 py-3 border-b border-slate-100">
        <p className="text-sm font-semibold tracking-tighttext-slate-900">
          Mi cuenta
        </p>
        <p className="text-xs text-slate-500 mt-0.5">usuario@email.com</p>
      </div>

      {/* ITEMS */}
      <div className="py-1">
        <a
          href="#"
          className="
            block px-4 py-2.5 text-sm
            text-slate-600
            hover:bg-slate-50
            hover:text-[#0F766E]
            transition-colors
            font-medium
          "
        >
          Perfil
        </a>

        <a
          href="#"
          className="
            block px-4 py-2.5 text-sm
            text-slate-600
            hover:bg-slate-50
            hover:text-[#0F766E]
            transition-colors
            font-medium
          "
        >
          Ajustes
        </a>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-100" />

      {/* ACTION */}
      <Button width="w-full" variant="logout">
        Cerrar sesión
      </Button>
    </div>
  );
};

export default DropDown;
