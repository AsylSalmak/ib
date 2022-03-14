import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Dashboard = () => {
  return (
    <div className="Dashboard-container">
      <div className="Dashboard-box">
        <label>Счета</label>
      </div>
      <div className="Dashboard-box"><label>Последние платежи</label></div>
      <div className="Dashboard-box"><label>Послдение Операции</label></div>
    </div>
  );
};
export default Dashboard;
