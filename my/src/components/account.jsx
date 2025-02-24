import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./ExpensesSection.css";
import SideBar from "./sideBar";
import Header from "./header";

const Account = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  

  const invoices = [
    { id: 1, image: "",bankName:"Cash",branchName: "Office", accountNo: "DBBL-0003", available:8858.00, date: "20th Jan, 2025", status: "Active"},
    { id: 2,image: "",bankName:"Cash", branchName: "Mirpur", accountNo: "CASH-0001",available:6655.00, date: "20th Jan, 2025", status: "Active"},
    ];

  return (
    <>
    <Header />
    <div className={`expenses-page-lay ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="expenses-container">
        <div className="expenses-header">
          <h3>Account</h3>
          <div className="expenses-action-buttons">
            <button onClick={() => navigate(-1)} className="back-button">🔙 Back</button>
            <button className="expenses-refresh-button">🔄</button>
            <button className="expenses-download-button">⬇️</button>
            <button className="expense-export-button">📄</button>
            <button className="expenses-print-button">🖨️</button>
            <button className="expenses-create-button">Create ➕</button>
          </div>
        </div>
        <div className="expenses-search-filter-section">
          <input type="text" placeholder="Search..." className="expenses-search-box" />
          <button className="expenses-date-filter-button">From - To</button>
        </div>
        <div className="expenses-table-wrapper">
        <table className="expenses-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Bank Name</th>
              <th>Branch Name</th>
              <th>Account Number</th>
              <th>Available Balance</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.image}</td>
                <td>
                    <a href="">{invoice.bankName}</a>
                </td>
                <td>{invoice.branchName}</td>
                <td>{invoice.accountNo}</td>
                <td>${invoice.available.toFixed(2)}</td>
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
    </>
  );
};

export default Account;
