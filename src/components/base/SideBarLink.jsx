import { NavLink } from "react-router-dom";

import Icon from "./Icon";

const SideBarLink = ({ to, icon, iconClass, children }) => {
  return (
    <NavLink
      to={to}
      className="
                flex items-center gap-3
                px-3 py-2.5 rounded-xl
                text-sm font-medium
                transition-all duration-200
                text-white/70 hover:bg-white/10 hover:text-white
            "
    >
      <Icon icon={icon} className={iconClass} />
      <span>{children}</span>
    </NavLink>
  );
};

export default SideBarLink;
