import React from "react";
import {
  BiArrowToLeft,
  BiArrowFromLeft,
  BiCog,
  BiCheckCircle,
  BiStar,
  BiLineChart,
  BiTransfer,
  BiHistory,
  BiUserCircle,
  BiBarChart,
} from "react-icons/bi";
import "./QuickLinks.css";

const QuickLinks = () => {
  const links = [
    { icon: <BiArrowToLeft />, label: "Deposit" },
    { icon: <BiArrowFromLeft />, label: "Withdraw" },
    { icon: <BiCog />, label: "Settings" },
    { icon: <BiCheckCircle />, label: "Verification" },
    { icon: <BiStar />, label: "Bonuses" },
    { icon: <BiLineChart />, label: "MT5" },
    { icon: <BiTransfer />, label: "Transfer" },
    { icon: <BiHistory />, label: "History" },
    { icon: <BiUserCircle />, label: "Partner" },
    { icon: <BiBarChart />, label: "Analytics" },
    { icon: <BiTransfer />, label: "Exchange" },
  ];

  return (
    <div className="quick-links-container">
      <h3>Quick Links</h3>
      <div className="quick-links-grid">
        {links.map((link, index) => (
          <div key={index} className="quick-link-item">
            <div className="icon">{link.icon}</div>
            <p>{link.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
