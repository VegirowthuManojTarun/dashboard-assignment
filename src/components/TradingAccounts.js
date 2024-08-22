import React from "react";
import "./TradingAccounts.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const TradingAccounts = () => {
  return (
    <div className="trading-accounts-container">
      <div className="trading-accounts">
        <h2>Trading Accounts</h2>
        <div className="account-card">
          <div className="account-details">
            <span className="account-type">Master Account</span>
            <div className="account-info">
              <span className="account-platform">CTrader</span>
              <span className="account-number">#273728</span>
            </div>
          </div>
          <div className="account-balance">
            <span className="balance">
              0.00 <span className="currency">USD</span>
            </span>
            <FaExternalLinkAlt className="external-link-icon" />
          </div>
        </div>
        <div className="account-card">
          <div className="account-details">
            <span className="account-type">Master Account</span>
            <div className="account-info">
              <span className="account-platform">CTrader</span>
              <span className="account-number">#273728</span>
            </div>
          </div>
          <div className="account-balance">
            <span className="balance">
              0.00 <span className="currency">USD</span>
            </span>
            <FaExternalLinkAlt className="external-link-icon" />
          </div>
        </div>
      </div>
      <div className="open-trades">
        <h2>Open Trades</h2>
        <div className="trade-card">
          <div className="open-trade-left-section">
            <div className="trade-info">
              <span className="trade-pair">GBPUSD</span>
              <span className="trade-direction long">Long</span>
            </div>
            <div className="trade-profit positive">+56.00 USD</div>
          </div>
          <div className="trade-lot">0.12</div>
        </div>
        <div className="trade-card">
        <div className="open-trade-left-section">
          <div className="trade-info">
            <span className="trade-pair">USDJPY</span>
            <span className="trade-direction long">Long</span>
          </div>
          <div className="trade-profit negative">-0.09 USD</div>
          </div>
          <div className="trade-lot">0.52</div>
        </div>
        <div className="trade-card">
        <div className="open-trade-left-section">
          <div className="trade-info">
            <span className="trade-pair">EURUSD</span>
            <span className="trade-direction short">Short</span>
          </div>
          <div className="trade-profit negative">-1.09 USD</div>
          </div>
          <div className="trade-lot">0.34</div>
        </div>
      </div>
    </div>
  );
};

export default TradingAccounts;
