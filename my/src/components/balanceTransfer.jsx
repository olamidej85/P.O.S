import React, {useState} from "react";
import { Form, useNavigate } from "react-router-dom";
import "./balancetransfer.css";
import SideBar from "./sideBar";
import Header from "./header";

const BalanceTransfer = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const invoices = [
    { id: 1, Reason: "Office Cash Transfer",Fromaccount:"Cash[CASH-0001]",toaccount: "Dutch Bangla Bank[DBBL-0003]", amount: 15000.00, date: "20th Jan, 2025", status: "Active"},
    { id: 2,Reason: "Regular Transfer",Fromaccount:"Cash[CASH-0001]", toaccount: "Dutch Bangla Bank[DBBL-0003]", amount: 25000.00, date: "20th Jan, 2025", status: "Active"},
    ];

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Header />
    <div className="balance-page-layout">
     <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="balance-container">
        <div className="balance-header">
          <h3>Balance</h3>
          <div className="balance-action-buttons">
            <button onClick={() => navigate("/dashboard")} className="back-button">🔙 Back</button>
            <button className="balance-refresh-button">🔄</button>
            <button className="balance-download-button">⬇️</button>
            <button className="balance-export-button">📄</button>
            <button className="balance-print-button">🖨️</button>
            <button className="balance-create-button" onClick={() => navigate("/transferCreat")} >Create ➕</button>
          </div>
        </div>
        <div className="balance-search-filter-section">
          <input type="text" placeholder="Search..." className="balance-search-box" />
          <button className="balance-date-filter-button">From - To</button>
        </div>
        <div className="balance-table-wrapper">
        <table className="balance-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Reason</th>
              <th>From Account</th>
              <th>To Account</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.Reason}</td>
                <td>{invoice.Fromaccount}</td>
                <td>{invoice.toaccount}</td>
                <td>${invoice.amount.toFixed(2)}</td>
                <td>{invoice.date}</td>
                <td>
                  <button className="btn">Active</button>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BalanceTransfer;
