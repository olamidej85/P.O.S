import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./expensesSection.css";
import Header from "./header";
import SideBar from "./sideBar";


const ExpensesCreat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    expensesReason: "",
    ammount: "",
    note: "",
    cheque:"",
    voucher: "",
    Date: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <div className="expenses-container" style={{ padding: "20px" }} >
        <Header />
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     
        <div className="head">
     <h2>Create an expenses</h2>
     <button className="bck-btn"  onClick={() => navigate('/purchases')}>back</button>
     </div>
      <form onSubmit={handleSubmit} className="expenses-form">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          <div style={{ flex: "1 1 100%" }}>
            <label>Expenses reason *</label>
            <input
              name="expenses"
              type="text"
              placeholder="Enter a reason"
              value={formData.expensesReason}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              placeholder="Enter an amount"
              value={formData.ammount}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Cheque  No</label>
            <input
              type="text"
              name="cheque"
              placeholder="Enter a cheque number"
              value={formData.cheque}
            />
          </div>

          <div style={{ flex: "1 1 20%" }}>
            <label>Voucher  No</label>
            <input
              type="text"
              name="voucher"
              placeholder="Enter a voucher no"
              value={formData.voucher}
            />
          </div>
      
          <div style={{ flex: "1 1 100%" }}>
            <label>Note</label>
            <textarea
              name="note"
              placeholder="Write your note here!"
              value={formData.note}
              onChange={handleChange}
              rows={3}
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <label> Date</label>
            <input
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>  

        </div>
        <div className="btnn">
          <button type="submit" className="save-btnn">Save</button>
          <button type="reset" className="reset-btnn">Reset</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default ExpensesCreat;
