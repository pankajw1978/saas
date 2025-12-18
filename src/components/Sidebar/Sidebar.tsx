import { useCallback, useState } from "react";
import { navMenus } from "../../constants/navs";
import type { NavMenu } from "../../constants/types";
import "./Sidebar.scss";
import { Dashboard, Star } from "../../assets/Icons";

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

const LeadGeneration = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-xxx"
    >
      <g clipPath="url(#clip0_4297_1588)">
        <path
          d="M10.8667 1.7293C10.5604 1.41597 10.0975 1.34097 9.69293 1.50972C8.38918 2.0543 7.14584 2.74597 5.98001 3.53764C1.26668 6.73472 -0.694155 11.9331 3.72293 16.3906C7.99668 20.7039 13.4479 18.5989 16.4646 14.1339C17.2588 12.9581 17.9638 11.6818 18.5058 10.3539C18.6658 9.96222 18.5967 9.51639 18.2938 9.22139C17.7279 8.66972 16.6508 7.81805 15.1492 7.49889C14.6871 7.40055 14.2333 7.6443 13.9871 8.04722C13.5221 8.80847 12.7538 10.0522 12.2517 10.7951C10.7779 12.9764 8.74626 13.9047 7.46626 12.6131C6.18584 11.321 6.99918 9.2668 9.23459 7.75014C10.0013 7.23014 11.3129 6.44514 12.0696 5.99847C12.4342 5.78305 12.6821 5.39764 12.6267 4.97764C12.4383 3.54305 11.4783 2.35555 10.8667 1.7293Z"
          stroke="current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.2592 12.8698C16.1342 12.3656 14.2854 11.416 12.7417 10.046M10.0259 7.23685C8.72086 5.63518 7.82627 3.76185 7.36627 2.66602"
          stroke="current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4297_1588">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sidebar;
