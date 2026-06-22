import { useState } from "react";

import DropDown from "./Dropdown";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow relative z-50">
      <nav className="container px-6 py-4 mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            className="h-7 w-auto"
            src="https://merakiui.com/images/full-logo.svg"
            alt="logo"
          />
        </a>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center focus:outline-none"
          >
            <div className="w-9 h-9 overflow-hidden border-2 border-gray-300 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                className="object-cover w-full h-full"
                alt="avatar"
              />
            </div>
          </button>

          {/* DROPDOWN MENU */}
          {open && <DropDown />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
