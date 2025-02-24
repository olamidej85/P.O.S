import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./payments.css";
import SideBar from "./sideBar";
import Header from "./header";

const Payments = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const invoices = [
    { id: 1, invoiceNo: "AI-4", client: "Walking Customer", total: 346000.00,paidamount: 15000.00, account:"Cash[CASH-0001]", paymentdate: "20th Jan, 2025", status: "Active"},
    { id: 2,invoiceNo: "AI-6", client: "Troy Walker",  total: 350000.00,paidamount: 25000.00,account:"Cash[CASH-0001]", paymentdate: "20th Jan, 2025", status: "Active"},
    { id: 3,invoiceNo: "AI-6", client: "Reed Montany",  total: 345300.00, paidamount: 35000.00,account:"Dutch Bangla Bank[DBBL-0003]", paymentdate: "20th Jan, 2025", status: "Active"},    
];

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Header />
    <div className="paymentsInvoice-page-layout">
    <SideBar  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="paymentsInvoice-container">
        <div className="paymentsInvoice-header">
          <h3>Invoice Payments</h3>
          <div className="paymentsInvoice-action-buttons">
            <button onClick={() => navigate(-1)} className="back-button">🔙 Back</button>
            <button className="paymentsInvoice-refresh-button">🔄</button>
            <button className="paymentsInvoice-download-button">⬇️</button>
            <button className="paymentsInvoice-export-button">📄</button>
            <button className="paymentsInvoice-print-button">🖨️</button>
            <button className="paymentsInvoice-create-button">Create ➕</button>
          </div>
        </div>
        <div className="paymentsInvoice-search-filter-section">
          <input type="text" placeholder="Search..." className="paymentsInvoice-search-box" />
          <button className="paymentsInvoice-date-filter-button">From - To</button>
        </div>
        <div className="paymentsInvoice-table-wrapper">
        <table className="paymentsInvoice-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Invoice No</th>
              <th>Client</th>
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
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.client}</td>
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

export default Payments;
