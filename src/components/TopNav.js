import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="top-nav">
        <h1>Dashboard</h1>
      <div className="side-section">
        <div className="search-bar">
          <BiSearch />
          <input type="text" placeholder="Search..." />
        </div>
        <FaBell className="bell-icon" />
      </div>
    </div>
  );
}

export default TopNav;
