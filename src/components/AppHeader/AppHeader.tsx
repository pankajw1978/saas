import React from "react";
import "./AppHeader.scss";

const QuestionMark = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-xxx"
    >
      <g clipPath="url(#clip0_4315_121091)">
        <path
          d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6023 1.66666 9.99996 1.66666C5.39759 1.66666 1.66663 5.39762 1.66663 9.99999C1.66663 14.6024 5.39759 18.3333 9.99996 18.3333Z"
          stroke="#717182"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.57507 7.49999C7.77099 6.94304 8.1577 6.47341 8.6667 6.17426C9.1757 5.87512 9.77415 5.76577 10.3561 5.86558C10.938 5.96539 11.4658 6.26792 11.846 6.71959C12.2262 7.17126 12.4343 7.74292 12.4334 8.33332C12.4334 9.99999 9.93341 10.8333 9.93341 10.8333"
          stroke="#717182"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14.1667H10.0083"
          stroke="#717182"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4315_121091">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Dark = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4315_121108)">
        <path
          d="M9.99996 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 9.99999C13.3333 8.15904 11.8409 6.66666 9.99996 6.66666C8.15901 6.66666 6.66663 8.15904 6.66663 9.99999C6.66663 11.8409 8.15901 13.3333 9.99996 13.3333Z"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 1.66666V3.33332"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 16.6667V18.3333"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.10828 4.10834L5.28328 5.28334"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.7167 14.7167L15.8917 15.8917"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.66663 10H3.33329"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6666 10H18.3333"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.28328 14.7167L4.10828 15.8917"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.8917 4.10834L14.7167 5.28334"
          stroke="#717182"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4315_121108">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

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
    </div>
  );
};

export default AppHeader;
