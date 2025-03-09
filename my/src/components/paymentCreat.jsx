import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payments.css";
import Header from "./header";
import SideBar from "./sideBar";


const PaymentCreat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    client: "",
    totalPayment: "",
    account:"",
    note: "",
    cheque:"",
    receipt: "",
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
    <div className="paymentsInvoice-container" style={{ padding: "20px" }} >
        <Header />
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     
        <div className="head">
     <h2>Create Invoice payment</h2>
     <button className="bck-btn"  onClick={() => navigate('/payments')}>back</button>
     </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

          <div style={{ flex: "1 1 100%" }}>
            <label>Client *</label>
            <select
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
            >
              <option value="">Select a client</option>
              <option value="client1">client 1</option>
              <option value="client2">client 2</option>
            </select>
          </div>

          <div style={{ flex: "1 1 45%" }}>
            <label>Total Payment</label>
            <input
              type="text"
              name="totalpayment"
              placeholder="0"
              value={formData.totalPayment}
              onChange={handleChange}
              disabled
            />
          </div>

          <div style={{ flex: "1 1 45%" }}>
          <label>Account *</label>
            <select
              name="account"
              value={formData.account}
              onChange={handleChange}
              required
            >
              <option value="Cash[CASH-0001]">Cash[CASH-0001]</option>
              <option value="Dutch Bangla Bank[DBBL-0003]">Dutch Bangla Bank[DBBL-0003]</option>
              <option value="Islami Bank Bangladesh Ltd[IBBL-0002]">Islami Bank Bangladesh Ltd[IBBL-0002]</option>
            </select>
          </div>

          <div style={{ flex: "1 1 20%" }}>
            <label>Cheque  No</label>
            <input
              type="text"
              name="cheque"
              placeholder="Enter a cheque number"
              value={formData.cheque}
            />
          </div>

          <div style={{ flex: "1 1 20%" }}>
            <label>Receipt  No</label>
            <input
              type="text"
              name="receipt"
              placeholder="Enter a receipt no"
              value={formData.receipt}
            />
          </div>

          <div style={{ flex: "1 1 20%" }}>
            <label>Return Date</label>
            <input
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 20%" }}>
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

export default PaymentCreat;
