import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./SalesReturn.css";
import SideBar from "./sideBar";
import Header from "./header";

const SalesReturns = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
 
  const invoices = [
    { id: 1, returnNo: "AIR-1", invoiceNo: "AI-4", client: "Walking Customer", returnReason: "Product Damage", cost: 3468.00, date: "20th Jan, 2025", status: "Active"},
    { id: 2, returnNo: "AIR-2", invoiceNo: "AI-6", client: "Troy Walker", returnReason: "Product Damage", cost: 3453.00, date: "20th Jan, 2025", status: "Active"},
    ];

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
  <div className="salesReturn-page-layout">
  <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="salesReturn-container">
      <Header />
        <div className="salesReturn-header">
          <h3>Sales Return</h3>
          <div className="salesReturn-action-buttons">
            <button onClick={() => navigate("/dashboard")} className="back-button">🔙 Back</button>
            <button className="salesReturn-refresh-button">🔄</button>
            <button className="salesReturn-download-button">⬇️</button>
            <button className="salesReturn-export-button">📄</button>
            <button className="salesReturn-print-button">🖨️</button>
            <button className="salesReturn-create-button " onClick={() => navigate("/salesReturnCreat")}>Create ➕</button>
          </div>
        </div>
        <div className="salesReturn-search-filter-section">
          <input type="text" placeholder="Search..." className="salesReturn-search-box" />
          <button className="salesReturn-date-filter-button">From - To</button>
        </div>
        <table className="salesReturn-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Return No</th>
              <th>Invoice Date</th>
              <th>Client</th>
              <th>Return Reason</th>
              <th>Cost of Return Product</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>
                  <a href="#">{invoice.returnNo}</a>
                </td>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.client}</td>
                <td>{invoice.returnReason}</td>
                <td>{invoice.cost.toFixed(2)}</td>
                <td>{invoice.date}</td>
                <td>{invoice.status}</td>
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

export default SalesReturns;
