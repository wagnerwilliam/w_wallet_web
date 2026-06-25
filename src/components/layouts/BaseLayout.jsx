import { useState } from "react";
import Header from "../base/Header";
import SideBar from "../base/SideBar";
import { Outlet } from "react-router-dom";

const BaseLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-slate-50">
      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:flex">
        <SideBar />
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* BACKDROP */}
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* SIDEBAR */}
          <div className="relative w-64 h-full">
            <SideBar />
          </div>
        </div>
      )}

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* HEADER recibe trigger */}
        <Header onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
