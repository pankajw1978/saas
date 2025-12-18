import React from "react";
import "./Dropdown.scss";

type DropdownTypes = {
  style?: {};
  icon: string;
  placeholder: string;
};

const Dropdown = ({ style, icon, placeholder }: DropdownTypes) => {
  return (
    <div className="dropdown-comp" style={style}>
      <img src={icon} alt="" className="dc-img" />
      <div className="dc-label">{placeholder}</div>
      <img className="dc-arrow" src="/svgs/arrow.svg" alt="" />
    </div>
  );
};

export default Dropdown;
