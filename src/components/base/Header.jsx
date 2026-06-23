import { useState } from "react";

import DropDown from "./Dropdown";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/80 backdrop-blur-md
        border-b border-slate-200
        h-22
        font-sans
    "
    >
      <nav
        className="
        h-full
        px-8
        flex items-center justify-end
    "
      >
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="
            flex items-center gap-3
            px-2 py-1.5
            rounded-xl
            hover:bg-slate-100
            transition
            focus:outline-none
        "
          >
            <div
              className="
              w-11 h-11
              overflow-hidden
              rounded-full
              border border-slate-200
              ring-2 ring-transparent
              hover:ring-[#0F766E]/20
              transition
          "
            >
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>

            <div className="hidden sm:block text-left leading-tight">
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                Usuario
              </p>
              <p className="text-xs text-slate-500 font-medium">Admin</p>
            </div>
          </button>

          {open && <DropDown />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
