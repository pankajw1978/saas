import React from "react";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="ah-left">
        <div className="ah-ham">
          <div className="ah-bar"></div>
          <div className="ah-bar"></div>
          <div className="ah-bar"></div>
        </div>
        <Credit />
      </div>
      <div className="ah-right">
        <div className="iconbox">
          <img src="/svgs/question.svg" alt="" />
        </div>
        <div className="iconbox">
          <img src="/svgs/dark.svg" alt="" />
        </div>
        <div className="iconbox">
          <img src="/svgs/call.svg" alt="" />
        </div>
        <div className="iconbox">
          <div className="ib-count">5</div>
          <img src="/svgs/notification.svg" alt="" />
        </div>
        <Profile />
      </div>
    </div>
  );
};

const Credit = () => {
  return (
    <div className="credit-comp">
      <div className="cc-icon">
        <img src="/svgs/stars.svg" alt="" />
      </div>
      <div className="cc-label">
        Credit: <span>12,000</span>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile-comp">
      <div className="pc-avatar">JD</div>
      <div className="pc-name">John Doe</div>
      <img src="/svgs/arrow.svg" alt="" />
    </div>
  );
};

export default AppHeader;
