import SideBarLink from "./SideBarLink";
import Logo from "./Logo";
import { sidebarSections } from "../../utils/sidebarSections";

const SideBar = ({ setIsMobileSidebarOpen }) => {
  return (
    <aside
      className="
        h-full w-full lg:w-64

        flex flex-col

        bg-linear-to-b
        from-[#0F766E]
        to-[#115E59]

        text-white
        border-r border-white/10
        shadow-xl
        font-sans
  "
    >
      {/* BRAND */}
      <div className="px-4 py-5 border-b border-white/10">
        <a href="#" className="flex items-center gap-3">
          <div
            className="
              w-12 h-12
              rounded-xl

              bg-linear-to-br
              from-white
              to-slate-100

              border border-white/40
              shadow-lg

              flex items-center justify-center
            "
          >
            <Logo className="h-6 w-auto" />
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-semibold tracking-tight text-white">
              Wallet
            </h1>

            <p className="text-xs text-white/70 font-medium">
              Control financiero
            </p>
          </div>
        </a>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-4">
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-8">
            <p
              className="
                px-3 mb-2
                text-[11px]
                uppercase
                tracking-wider
                text-white/50
                font-medium
              "
            >
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  <SideBarLink
                    key={item.label}
                    to={item.path}
                    icon={item.icon}
                    iconClass="w-5 h-5"
                  >
                    {item.label}
                  </SideBarLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
