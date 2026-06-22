import Header from "../base/Header";
import Footer from "../base/Footer";
import SideBar from "../base/SideBar";

const BaseLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
