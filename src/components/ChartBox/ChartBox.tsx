import React from "react";
import "./ChartBox.scss";

type ChartBoxTypes = {
  title: string;
  icon: string;
  children?: any;
};

const ChartBox = ({ title, icon, children }: ChartBoxTypes) => {
  return (
    <div className="chart-box-comp">
      <div className="cbc-header">
        <div className="cbc-title">
          <img src={icon} alt="" />
          {title}
          <img src="/svgs/info-icon.svg" alt="" />
        </div>
      </div>

      <div className="cbc-body">{children}</div>
    </div>
  );
};

export default ChartBox;
