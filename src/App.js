import React from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import QuickLinks from "./components/QuickLinks";
import OverviewChart from "./components/OverviewChart";
import TradingAccounts from "./components/TradingAccounts";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <div className="dashboard-section">
          <div className="left-section">
            <QuickLinks/>
            <OverviewChart/>
          </div>
          <div className="right-section">
          <TradingAccounts/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
