import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

import useClickOutside from "../../custom_hooks/useClickOutside";
import DropDown from "./Dropdown";

const Header = ({ setIsMobileSidebarOpen, openModal, usuario }) => {
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
              flex h-10 w-10 items-center justify-center
              overflow-hidden rounded-full
              border border-slate-200
              bg-slate-100
              ring-2 ring-transparent
              transition
              hover:ring-[#0F766E]/20
              "
            >
              {usuario.photo ? (
                <img
                  src={usuario.photo}
                  alt={usuario.username}
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserCircleIcon className="h-8 w-8 text-slate-400" />
              )}
            </div>

            {/* INFO */}
            <div className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-sm font-semibold text-slate-900 tracking-tight">
                {usuario.username}
              </span>
              {/* <span className="text-xs text-slate-500 font-medium">
                Administrador
              </span> */}
            </div>
          </button>

          {/* DROPDOWN */}
          {openDropdown && <DropDown usuario={usuario} openModal={openModal} />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
