import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SideBarLink from "./SideBarLink";
import Icon from "./Icon";
import Logo from "./Logo";

const SideBar = () => {
  const iconClass = "w-5 h-5";

  return (
    <aside
      className="
        w-64
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
        {/* GENERAL */}
        <div>
          <p className="px-3 mb-2 text-[11px] uppercase tracking-wider text-white/50 font-medium">
            General
          </p>

          <div className="space-y-1 text-sm">
            <SideBarLink to="/dashboard" icon={HomeIcon} iconClass={iconClass}>
              Dashboard
            </SideBarLink>

            <SideBarLink
              to="/accounts"
              icon={UserGroupIcon}
              iconClass={iconClass}
            >
              Cuentas
            </SideBarLink>
          </div>
        </div>

        {/* FINANZAS */}
        <div className="mt-8">
          <p className="px-3 mb-2 text-[11px] uppercase tracking-wider text-white/50 font-medium">
            Finanzas
          </p>

          <div className="space-y-1 text-sm">
            <SideBarLink
              to="/transactions"
              icon={CreditCardIcon}
              iconClass={iconClass}
            >
              Transacciones
            </SideBarLink>

            <SideBarLink
              to="/budgets"
              icon={ChartBarIcon}
              iconClass={iconClass}
            >
              Presupuestos
            </SideBarLink>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
