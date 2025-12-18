import { useCallback, useState } from "react";
import { navMenus } from "../../constants/navs";
import type { NavMenu } from "../../constants/types";
import "./Sidebar.scss";
import { Star } from "../../assets/Icons";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState(0);

  const isActive = useCallback(
    (menuIndex: number) => {
      return menuIndex === activeNav;
    },
    [activeNav]
  );
  return (
    <div className="sidebar-comp">
      <div className="sc-head">
        <div className="sch-logo">L</div>
        <div className="sch-content">LeadFlow</div>
      </div>
      <div className="sc-main-navigation">
        <Star />
        <div className="scmn-label">Get Started</div>
      </div>
      <div className="sc-border"></div>
      <div className="sc-body">
        {navMenus?.map((menu: NavMenu, index: number) => (
          <SidebarItem
            key={menu.label}
            menu={menu}
            active={isActive(index)}
            setActive={() => setActiveNav(index)}
          />
        ))}
      </div>
    </div>
  );
};

const SidebarItem = ({
  menu,
  active,
  setActive,
}: {
  menu: NavMenu;
  active: boolean;
  setActive: () => void;
}) => {
  return (
    <div
      className={`scbi-item ${menu.label == "AI Suit" ? "active" : ""}`}
      onClick={setActive}
    >
      <div className="scbi-icon">
        <img src={`/svgs/sidemenus/${menu.icon}.svg`} alt="" />
      </div>
      <div className="scbi-label">{menu.label}</div>
    </div>
  );
};

export default Sidebar;
