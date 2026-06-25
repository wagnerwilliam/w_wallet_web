import { useState, useRef } from "react";
import DropDown from "./Dropdown";
import { Bars3Icon } from "@heroicons/react/24/outline";
import useClickOutside from "../../custom_hooks/useClickOutside";

const Header = ({ setIsMobileSidebarOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setOpenDropdown(false);
  });

  return (
    <header
      ref={menuRef}
      className="
        sticky top-0 z-40
        h-22
        bg-white/80 backdrop-blur-md
        border-b border-slate-200
        font-sans
      "
    >
      <nav
        className="
          h-full
          px-6 lg:px-8
          flex items-center justify-between
        "
      >
        <div className="flex items-center gap-3">
          {/* Hamburguesa (mobile) */}
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="
              lg:hidden
              p-2 rounded-lg
              hover:bg-slate-100
              transition
            "
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>

        {/* RIGHT SIDE (USER) */}
        <div className="relative">
          <button
            onClick={() => setOpenDropdown((prev) => !prev)}
            className="
              flex items-center gap-3
              px-2 py-1.5
              rounded-xl
              hover:bg-slate-100
              transition
              focus:outline-none
            "
          >
            {/* AVATAR */}
            <div
              className="
                w-10 h-10
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

            {/* INFO */}
            <div className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-sm font-semibold text-slate-900 tracking-tight">
                Usuario
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Administrador
              </span>
            </div>
          </button>

          {/* DROPDOWN */}
          {openDropdown && <DropDown />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
