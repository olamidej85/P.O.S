import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import "./balancetransfer.css";
import SideBar from "./sideBar";
import Header from "./header";

const BalanceAdjustments = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const invoices = [
    { id: 1, bankname: "Cash",accountno:"CASH-0001", amount: 15000.00,type:"Add Balance", date: "20th Jan, 2025", status: "Active"},
    { id: 2,bankname: "Dutch Bangla ",accountno:"DBBL-0001", amount: 25000.00, type:"Add Balance", date: "20th Jan, 2025", status: "Active"},
    ];

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Header />
    <div className="balance-page-layout">
     <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="balance-container">
        <div className="balance-header">
          <h3>Balance Adjustment</h3>
          <div className="balance-action-buttons">
            <button onClick={() => navigate(-1)} className="back-button">🔙 Back</button>
            <button className="balance-refresh-button">🔄</button>
            <button className="balance-download-button">⬇️</button>
            <button className="balance-export-button">📄</button>
            <button className="balance-print-button">🖨️</button>
            <button className="balance-create-button">Create ➕</button>
          </div>
        </div>
        <div className="balance-search-filter-section">
          <input type="text" placeholder="Search..." className="balance-search-box" />
          <button className="balance-date-filter-button">From - To</button>
        </div>
        <table className="balance-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.bankname}</td>
                <td>{invoice.accountno}</td>
                <td>${invoice.amount.toFixed(2)}</td>
                <td>{invoice.type}</td>
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
  );
};

export default BalanceAdjustments;
