import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./PurchaseReturn.css";
import SideBar from "./sideBar";
import Header from "./header";

const PurchaseReturn = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <Header />
    <div className="Return-page-layout">
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="purchaseReturn-container">
      <div className="purchaseReturn-header">
        <h3>Purchase Returns</h3>
        <div className="Return-action-buttons">
          <button onClick={() => navigate(-1)} className="back-button">
            🔙 Back
          </button>
          <button className="Return-refresh-button">🔄</button>
          <button className="Return-download-button">⬇️</button>
          <button className="Return-export-button">📄</button>
          <button className="Return-print-button">🖨️</button>
          <button className="Return-create-button">Create ➕</button>
        </div>
      </div>
      <div className="Return-search-filter-section">
        <input type="text" placeholder="Search..." className="Return-search-box" />
        <button className="Return-date-filter-button">From - To</button>
      </div>
      <div className="return-table-wrapper">
      <table className="Return-purchases-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Return No</th>
            <th>Purchase No</th>
            <th>Supplier</th>
            <th>Return Reason</th>
            <th>Cost of Return Product</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>
              <a href="#">APP–2</a>
            </td>
            <td>APP-2</td>
            <td>Logan Brain</td>
            <td>Broken product</td>
            <td>$25000.00</td>
            <td>18th jan,2025</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#">APP–2</a>
            </td>
            <td>APP-2</td>
            <td>Adam Bush</td>
            <td>Damage product</td>
            <td>$25000.00</td>
            <td>18th jan,2025</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PurchaseReturn;
