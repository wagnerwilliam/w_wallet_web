import Header from "../base/Header";
import Footer from "../base/Footer";
import SideBar from "../base/SideBar";

const BaseLayout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-slate-50">
      {/* LEFT SIDEBAR (FULL HEIGHT) */}
      <SideBar />

      {/* RIGHT COLUMN */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* HEADER (solo derecha) */}
        <Header />

        {/* CONTENT (scroll aquí) */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>

        {/* FOOTER (solo derecha) */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default BaseLayout;
