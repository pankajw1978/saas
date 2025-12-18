import React from "react";
import "./Dashboard.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import ChartBox from "../../components/ChartBox/ChartBox";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-head">
        <div className="dh-left">
          Welcome <span>John Doe</span>
        </div>
        <div className="dh-right">
          <Dropdown placeholder="Staff" icon="/svgs/user.svg" />
          <Dropdown placeholder="Today" icon="/svgs/calendar.svg" />
          <Button img="/svgs/edit.svg" type="edit">
            Edit
          </Button>
          <Button img="/svgs/download.svg" type="download">
            Download
          </Button>
        </div>
      </div>

      <div className="dashboard-body">
        <Marketing />
        <TotalRevenue />
      </div>
    </div>
  );
};

const Button = ({ img = "", children = "", style = {}, type = "edit" }) => {
  return (
    <div className={`button ${type}`} style={style}>
      <img src={img} alt="" className="b-img" />
      <div className="b-label">{children}</div>
    </div>
  );
};

const Marketing = () => {
  return (
    <ChartBox icon="/svgs/marketing.svg" title="Marketing">
      <div className="marketing-body">
        <div className="mb-card">
          <div className="mb-info">
            <img src="/svgs/ad-spent.svg" alt="" />
            <div className="mb-title">Ad Spent</div>
          </div>

          <div className="mb-value">₹0.00</div>
        </div>

        <div className="mb-card">
          <div className="mb-info">
            <img src="/svgs/cpl.svg" alt="" />
            <div className="mb-title">CPL (cost per lead)</div>
          </div>

          <div className="mb-value">₹0.00</div>
        </div>

        <div className="mb-card">
          <div className="mb-info">
            <img src="/svgs/roas.svg" alt="" />
            <div className="mb-title">ROAS</div>
          </div>

          <div className="mb-value roas">₹459,999.00</div>
        </div>
      </div>
    </ChartBox>
  );
};

const TotalRevenue = () => {
  return (
    <ChartBox icon="/svgs/total-revenue.svg" title="Total Revenue">
      <div className="total-revenue">
        <div className="tv-top">
          <div className="tbt-card">
            <div className="tbtc-row">
              <img src="svgs/income.svg" alt="" />

              <div className="tvtc-row-title">Income</div>
            </div>

            <div className="tbtc-value">₹459,999</div>
          </div>

          <div className="tbt-card">
            <div className="tbtc-row">
              <img src="svgs/expense.svg" alt="" />

              <div className="tvtc-row-title">Expense</div>
            </div>

            <div className="tbtc-value">₹459,999</div>
          </div>
        </div>

        <div className="tbt-card row net-profit">
          <div className="tbtc-row">
            <img src="svgs/net-profit.svg" alt="" />

            <div className="tvtc-row-title">Net Profit</div>
          </div>

          <div className="tbtc-value">₹437,899</div>
        </div>

        <div className="tbt-card row prof">
          <div className="tbtc-row">
            <img src="svgs/profitability.svg" alt="" />

            <div className="tvtc-row-title">Profitability</div>
          </div>

          <div className="tbtc-value">₹437,899</div>
        </div>
      </div>
    </ChartBox>
  );
};

export default Dashboard;
