import React from "react";
import "./Sidebar.css";
import { FaThLarge, FaUserFriends, FaChartLine, FaWallet, FaHistory, FaBell, FaCog, FaHeadset, FaSignOutAlt, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Ditch Dollar</div>
      <div className="nav">
        <div className="nav-item active">
          <FaThLarge />
          Dashboard
        </div>
        <div className="nav-item">
          <FaUserFriends />
          CRM
        </div>
        <div className="nav-item">
          <FaChartLine />
          MAM
        </div>
        <div className="nav-item">
          <FaChartLine />
          PAMM
        </div>
        <div className="nav-item">
          <FaChartLine />
          Trade
        </div>
        <div className="nav-item">
          <FaWallet />
          Wallet
        </div>
        <div className="nav-item">
          <FaChartLine />
          Accounts
        </div>
        <div className="nav-item">
          <FaHistory />
          History
        </div>
        <div className="bottom-nav">
          <div className="nav-item">
            <FaBell />
            Notifications
          </div>
          <div className="nav-item">
            <FaCog />
            Settings
          </div>
          <div className="nav-item">
            <FaHeadset />
            Help & Support
          </div>
          <div className="nav-item">
            <FaSignOutAlt />
            Log Out
          </div>
        </div>
      </div>
      <div className="profile">
        <FaUser />
        <div>
          <p>Shyam Shakur</p>
          <small>shyam01.shankur@mail.com</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
