import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./ExpensesSection.css";
import SideBar from "./sideBar";
import Header from "./header";

const ExpensesSubcategory = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  

  const invoices = [
    { id: 1, Category: "Rent[AEC-1]",Subcategorycode: "AES-1",SubcategoryName:"Office Rent",  status: "Active", Action:""},
    { id: 2, Category: "Stationary[AEC-2]", Subcategorycode: "AES-2", SubcategoryName:"Office Stationary", status: "Active",Action:"",},
    ];

  return (
    <>
    <Header />
    <div className={`expenses-page-lay ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="expenses-container">
        <div className="expenses-header">
          <h3>Expenses Sub Categories</h3>
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
        <table className="expenses-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Sub Category Code</th>
              <th> Sub CategoryName</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id}>
                <td>{index + 1}</td>
                <td>{invoice.Category}</td>
                <td>{invoice.Subcategorycode}</td>
                <td>{invoice.SubcategoryName}</td>
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
    </>
  );
};

export default ExpensesSubcategory;
