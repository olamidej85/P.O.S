import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./ExpensesSection.css";
import SideBar from "./sideBar";
import Header from "./header";

const Transaction = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
   
    const invoices = [
      { id: 1, reason: "[AE-2] February Payroll sent from [CASH-0001]",        amount: 34618.00, date: "20th Jan, 2025", Account:"Dutch Bangla Bank[DBBL-0003]",           type:"Credit", status: "Active",created:"Super Admin",},
      { id: 2, reason: "[AI-6] Invoice Payment added to [DBBL-0003]",          amount: 34534.00, date: "20th Jan, 2025", Account:"Islami Bank Bangladesh Ltd[IBBL-0002]",  type:"Credit",  status: "Active",created:"Super Admin",},
      { id: 3, reason: "[AIR-2] Invoice Return payable sent from [CASH-0001]", amount: 87693.00, date: "20th Jan, 2025", Account:"Islami Bank Bangladesh Ltd[IBBL-0002]",  type:"Dedit",  status: "Active",created:"Super Admin",},
      { id: 4, reason: "[AC-5] Non inovice payment added to [IBBL-0002]",      amount: 34153.00, date: "20th Jan, 2025", Account:"Dutch Bangla Bank[DBBL-0003]",           type:"Credit", status: "Active",created:"Super Admin",},
      { id: 5, reason: "[AC-4] Non inovice payment added to [DBBL-0003]",      amount: 34553.00, date: "20th Jan, 2025", Account:"Islami Bank Bangladesh Ltd[IBBL-0002]",  type:"Credit", status: "Active",created:"Super Admin",},
      { id: 6, reason: "[AS-1] Non purchase due sent from [DBBL-0003]",        amount: 34567.00, date: "20th Jan, 2025", Account:"Cash[CASH-0001]",                        type:"Dedit",  status: "Active",created:"Super Admin",},
      { id: 7, reason: "[AS-2] Non purchase due sent from [IBBL-0002]",        amount: 45453.00, date: "20th Jan, 2025", Account:"Dutch Bangla Bank[DBBL-0003]",           type:"Dedit",  status: "Active",created:"Super Admin",},
      { id: 8, reason: "[DBBL-0001] Loan Payment sent from [DBBL-0003]",       amount: 23453.00, date: "20th Jan, 2025", Account:"Cash[CASH-0001]",                        type:"Credit", status: "Active",created:"Super Admin",},
         
  
  ];
  

  return (
    <>
    <Header />
    <div className={`expenses-page-lay ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="expenses-container">
        <div className="expenses-header">
          <h3>Transaction history</h3>
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
        <th>Reason</th>
        <th>Date</th>
        <th>Type</th>
        <th>Account</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Created By</th>
        </tr>
        </thead>
        <tbody>
{invoices.map((invoice, index) => (
<tr key={invoice.id}>
  <td>{index + 1}</td>
  <td>
    {invoice.reason}
  </td>
  <td>{invoice.date}</td>
  <td>
      {invoice.type}
  </td>
  <td>{invoice.Account}</td>
  <td>${invoice.amount.toFixed(2)}</td>
  
  <td>
    <button className="btn">Active</button>
  </td>
  <td>{invoice.created}</td>
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

export default Transaction;
