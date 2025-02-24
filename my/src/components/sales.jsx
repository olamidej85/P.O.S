import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Sales.css";
import SideBar from "./sideBar";
 import Header from "./header";

const Sales = () => { 
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
 
  const invoices = [
    { id: 1, invoiceNo: "AI-2", client: "Walking Customer", subtotal: 2245.00, transport: 0, discount: 0, tax: 0, netTotal: 2245.00, totalPaid: 2245.00, totalDue: 0, Invoicedate: "20th Jan, 2025", status: "Active",woocommercestatus: "" },
    { id: 2, invoiceNo: "AI-1", client: "Troy Walker", subtotal: 2245.00, transport: 0, discount: 0, tax: 0, netTotal: 2245.00, totalPaid: 2245.00, totalDue: 0, Invoicedate: "20th Jan, 2025", status: "Active",woocommercestatus: "" },
    { id: 3, invoiceNo: "AI-2", client: "Ruth Miles", subtotal: 2090.00, transport: 300, discount: 62.70, tax: 209, netTotal: 2536.30, totalPaid: 0, totalDue: 2536.30, Invoicedate: "20th Jan, 2025", status: "Active",woocommercestatus: "" },
    { id: 4, invoiceNo: "AI-3", client: "Troy Walker", subtotal: 18725.00, transport: 0, discount: 0, tax: 1872.50, netTotal: 20597.50, totalPaid: 15000.00, totalDue: 5597.50, Invoicedate: "20th Jan, 2025", status: "Active",woocommercestatus: "" },
    { id: 5, invoiceNo: "AI-4", client: "Ciaran Buck", subtotal: 18725.00, transport: 0, discount: 0, tax: 1872.50, netTotal: 20597.50, totalPaid: 0, totalDue: 20597.50, Invoicedate: "20th Jan, 2025", status: "Active",woocommercestatus: "" },
    { id: 6, invoiceNo: "AI-5", client: "Troy Walker", subtotal: 18725.00, transport: 0, discount: 0, tax: 1872.50, netTotal: 20597.50, totalPaid: 0, totalDue: 20597.50, Invoicedate: "20th Jan, 2025", status: "Active",woocommercestatus: ""},
    { id: 7, invoiceNo: "AI-6", client: "Ruth Miles", subtotal: 18725.00, transport: 0, discount: 0, tax: 1498.00, netTotal: 16478.00, totalPaid: 0, totalDue: 16478.00, Invoicedate: "20th Jan, 2025", status: "Active", woocommercestatus: ""},
    ];

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Header />
    <div className="sales-page-layout">
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="salesInvoice-container">
        <div className="salesInvoice-header">
          <h3>Sales Invoices</h3>
          <div className="salesInvoice-action-buttons">
            <button onClick={() => navigate(-1)} className="back-button">🔙 Back</button>
            <button className="salesInvoice-refresh-button">🔄</button>
            <button className="salesInvoice-download-button">⬇️</button>
            <button className="salesInvoice-export-button">📄</button>
            <button className="salesInvoice-print-button">🖨️</button>
            <button className="salesInvoice-create-button">Create ➕</button>
          </div>
        </div>
        <div className="salesInvoice-search-filter-section">
          <input type="text" placeholder="Search..." className="salesInvoice-search-box" />
          <button className="salesInvoice-date-filter-button">From - To</button>
        </div>
        <div className="salesInvoice-table-wrapper">
        <table className="salesInvoice-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Invoice No</th>
              <th>Invoice Date</th>
              <th>Client</th>
              <th>Subtotal</th>
              <th>Transport</th>
              <th>Discount</th>
              <th>Tax</th>
              <th>Net Total</th>
              <th>Total Paid</th>
              <th>Total Due</th>
              <th>Status</th>
              <th>Woocommerce Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>
                  <a href="#">{invoice.invoiceNo}</a>
                </td>
                <td>{invoice.Invoicedate}</td>
                <td>{invoice.client}</td>
                <td>${invoice.subtotal.toFixed(2)}</td>
                <td>${invoice.transport.toFixed(2)}</td>
                <td>${invoice.discount.toFixed(2)}</td>
                <td>${invoice.tax.toFixed(2)}</td>
                <td>${invoice.netTotal.toFixed(2)}</td>
                <td>${invoice.totalPaid.toFixed(2)}</td>
                <td className={invoice.totalDue > 0 ? "text-red" : "text-green"}>${invoice.totalDue.toFixed(2)}</td>
                <td>
                  <button className="btn">Active</button>
                </td>
                <td>{invoice.woocommercestatus}</td>
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

export default Sales;
