import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./supplierSection.css";
import SideBar from "./sideBar";
import Header from "./header";

const SupplierSection = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  const invoices = [
    { id: 1, purchaseNo: "AI-4",supplier: "Walking Customer", total: 346000.00, paidamount: 15000.00, account:"Cash[CASH-0001]", paymentdate: "20th Jan, 2025", status: "Active"},
    { id: 2,purchaseNo: "AI-6", supplier: "Troy Walker",  total: 350000.00, paidamount: 25000.00,account:"Cash[CASH-0001]", paymentdate: "20th Jan, 2025", status: "Active"},
    { id: 3,purchaseNo: "AI-6", supplier: "Reed Montany",  total: 345300.00, paidamount: 35000.00,account:"Dutch Bangla Bank[DBBL-0003]", paymentdate: "20th Jan, 2025", status: "Active"},    
];

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Header />
    <div className="supplier-page-layout">
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="supplier-container">
        <div className="supplier-header">
          <h3>Purchase Payments</h3>
          <div className="supplier-action-buttons">
            <button onClick={() => navigate(-1)} className="back-button">🔙 Back</button>
            <button className="supplier-refresh-button">🔄</button>
            <button className="supplier-download-button">⬇️</button>
            <button className="supplier-export-button">📄</button>
            <button className="supplier-print-button">🖨️</button>
            <button className="supplier-create-button">Create ➕</button>
          </div>
        </div>
        <div className="supplier-search-filter-section">
          <input type="text" placeholder="Search..." className="supplier-search-box" />
          <button className="supplier-date-filter-button">From - To</button>
        </div>
        <div className="supplier-table-wrapper">
        <table className="supplier-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Purchase No</th>
              <th>Supplier</th>
              <th>Total</th>
              <th>Paid Amount</th>
              <th>Account</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.purchaseNo}</td>
                <td>{invoice.supplier}</td>
                <td>{invoice.total.toFixed(2)}</td>
                <td>{invoice.paidamount.toFixed(2)}</td>
                <td>{invoice.account}</td>
                <td>{invoice.paymentdate}</td>
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

export default SupplierSection;
