import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./ExpensesSection.css";
import SideBar from "./sideBar";
import Header from "./header";

const ExpensesSection = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  

  const invoices = [
    { id: 1, image: "",expensesreason: "Sticky Notes Purchase",category:"stationary [AES-2]", subcategory: "Office Stationary [AES-2]", amount: 15000.00, account:"Cash[CASH-0001]", date: "20th Jan, 2025", status: "Active"},
    { id: 2,image: "", expensesreason: "April Office Rent", category:"stationary [AES-2]", subcategory: "Office Rent [AES-1]", amount: 25000.00,account:"Cash[CASH-0001]", date: "20th Jan, 2025", status: "Active"},
    ];

  return (
    <>
    <Header />
    <div className={`expenses-page-lay ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="expenses-container">
        <div className="expenses-header">
          <h3>Expenses</h3>
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
              <th>Expenses Reason</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Amount</th>
              <th>Account</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.image}</td>
                <td>{invoice.expensesreason}</td>
                <td>{invoice.category}</td>
                <td>{invoice.subcategory}</td>
                <td>${invoice.amount.toFixed(2)}</td>
                <td>{invoice.account}</td>
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

export default ExpensesSection;
