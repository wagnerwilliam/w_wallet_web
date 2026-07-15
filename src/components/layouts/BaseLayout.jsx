import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import useClickOutside from "../../custom_hooks/useClickOutside";
import { DetalleUsuario } from "../../queries/usuarios";
import Header from "../base/Header";
import SideBar from "../base/SideBar";
import PerfilModal from "../perfil/PerfilModal";

/**
 * Layout principal de la aplicación.
 *
 * Proporciona la estructura base para las rutas autenticadas,
 * incluyendo el menú lateral, el encabezado, el contenido principal
 * y los elementos globales como el modal de perfil.
 */
const BaseLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [modal, setOpenModal] = useState(false);
  const sidebarRef = useRef(null);
  const { data: usuario = {} } = DetalleUsuario();

  useClickOutside(sidebarRef, () => {
    if (isMobileSidebarOpen) setIsMobileSidebarOpen(false);
  });

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-slate-50">
      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:flex">
        <SideBar />
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/40" />

          {/* SIDEBAR */}
          <div className="relative w-64 h-full" ref={sidebarRef}>
            <SideBar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
          </div>
        </div>
      )}

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* HEADER recibe trigger */}
        <Header
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          openModal={openModal}
          usuario={usuario}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        {modal && <PerfilModal closeModal={closeModal} usuario={usuario} />}
      </div>
    </div>
  );
};

export default BaseLayout;
