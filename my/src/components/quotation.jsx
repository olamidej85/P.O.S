import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./ExpensesSection.css";
import SideBar from "./sideBar";
import Header from "./header";

const Quotation = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  

  const invoices = [
    { id: 1, QuotationNo: "APQ-1",QuotationDate: "feb 23 2025",Client:"Macus Dan", Subtotal: 345300.00, transport:0, Discount:0, tax:3432.00, netTotal:29546.00, status: "Active", Action:""},
    ];

  return (
    <>
    <Header />
    <div className={`expenses-page-lay ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="expenses-container">
        <div className="expenses-header">
          <h3>Quotation</h3>
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
              <th>  Quotation No</th>
              <th>Quotation Date</th>
              <th>Client</th>
              <th>Sub Total</th>
              <th>Transport</th>
              <th>Discount</th>
              <th>Tax</th>
            <th>Net Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>
                    <a href="">{invoice.QuotationNo}</a>
                    </td>
                <td>{invoice.QuotationDate}</td>
                <td>{invoice.Client}</td>
                <td>{invoice.Subtotal.toFixed(2)}</td>
                <td>{invoice.transport.toFixed(2)}</td>
                <td>{invoice.Discount.toFixed(2)}</td>
                <td>{invoice.tax.toFixed(2)}</td>
                <td>{invoice.netTotal.toFixed(2)}</td>
                <td>
                  <button className="btn">Active</button>
                </td>
                <td>{invoice.Action}</td>
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

export default Quotation;
