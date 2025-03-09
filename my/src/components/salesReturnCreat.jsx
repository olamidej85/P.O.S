import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./salesReturn.css";
import Header from "./header";
import SideBar from "./sideBar";


const SalesReturnCreat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
     const [formData, setFormData] = useState({
    returnReason:"",
    client: "",
    selectProduct: "",
    invoiceTotal:"",
    totalPaid: "",
    newDue:"",
    note: "",
    delivery: "",
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
    <div className="salesReturn-container" style={{ padding: "20px" }} >
        <Header />
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     
        <div className="head">
     <h2>Create Invoice Return</h2>
     <button className="bck-btn"  onClick={() => navigate('/salesReturns')}>back</button>
     </div>
      <form onSubmit={handleSubmit} className="sales-form">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 45%" }}>
            <label>Return Reason</label>
            <input
              type="text"
              name="returnReason"
              placeholder="Enter a reason"
              value={formData.returnReason}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 45%" }}>
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

          <div style={{ flex: "1 1 100%" }}>
            <label>Select Products</label>
            <select
              name="SelectProduct"
              value={formData.selectProduct}
              onChange={handleChange}
              required
            >
              <option value="">Search products</option>
              <option value="Pentinum">Pentinum</option>
              <option value="Inspion">Inspion</option>
            </select>
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Invoice Total</label>
            <input
              type="text"
              name="invoiceTotal"
              placeholder="0"
              value={formData.invoiceTotal}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Total Paid</label>
            <input
              type="text"
              name="totalpaid"
              placeholder=""
              value={formData.totalPaid}
              disabled
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>New Due</label>
            <input
              type="text"
              name="Due"
              placeholder=""
              value={formData.newDue}
              disabled
            />
          </div>


          <div style={{ flex: "1 1 30%" }}>
            <label>Return Date</label>
            <input
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
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

export default SalesReturnCreat;
