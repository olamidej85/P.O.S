import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./balanceTransfer.css";
import Header from "./header";
import SideBar from "./sideBar";


const TransferCreat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    transferReason: "",
    availablebalance: "45764.80",
    note: "",
    amount:"",
    fromAccount: "",
    toAccount:"",
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
    <div className="balance-container" style={{ padding: "20px" }} >
    <Header />
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     
        <div className="head">
     <h2>Create a balance transfer</h2>
     <button className="bck-btn"  onClick={() => navigate('/balanceTransfer')}>back</button>
     </div>
      <form onSubmit={handleSubmit} className="balance-form">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          <div style={{ flex: "1 1 100%" }}>
            <label>Transfer reason *</label>
            <input
              name="transfer"
              type="text"
              placeholder="Enter a reason"
              value={formData.transferReason}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ flex: "1 1 45%" }}>
          <label> From Account *</label>
            <select
              name="account"
              value={formData.fromAccount}
              onChange={handleChange}
              required
            >
              <option value="Cash[CASH-0001]">Cash[CASH-0001]</option>
              <option value="Dutch Bangla Bank[DBBL-0003]">Dutch Bangla Bank[DBBL-0003]</option>
              <option value="Islami Bank Bangladesh Ltd[IBBL-0002]">Islami Bank Bangladesh Ltd[IBBL-0002]</option>
            </select>
          </div>

          <div style={{ flex: "1 1 45%" }}>
          <label> To Account *</label>
            <select
              name="toaccount"
              value={formData.toAccount}
              onChange={handleChange}
              required
            >
              <option value="Cash[CASH-0001]">Cash[CASH-0001]</option>
              <option value="Dutch Bangla Bank[DBBL-0003]">Dutch Bangla Bank[DBBL-0003]</option>
              <option value="Islami Bank Bangladesh Ltd[IBBL-0002]">Islami Bank Bangladesh Ltd[IBBL-0002]</option>
            </select>
          </div>

          <div style={{ flex: "1 1 45%" }}>
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
            <label>Available balance</label>
            <input
              type="number"
              name="availablebalance"
              placeholder=""
              value={formData.availablebalance}
              onChange={handleChange}
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

export default TransferCreat;
