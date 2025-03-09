import React, { useState } from "react";
import "./purchaseReturn.css";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import SideBar from "./sideBar";



const PurchaseReturnCreat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
     const [formData, setFormData] = useState({
    supplier: "",
    returnReason: "",
    selectProduct: "",
    note: "",
    returnDate: "",
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
    <div className="purchases-container" style={{ padding: "20px" }} >
        <Header />
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     <div className="head">
     <h2>Create Purchase Return</h2>
     <button className="bck-btn"  onClick={() => navigate('/purchaseReturn')}>back</button>
     </div>
      <form onSubmit={handleSubmit} className="purchase-form">
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
            <label>Supplier *</label>
            <select
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              required
            >
              <option value="">Select a supplier</option>
              <option value="Supplier1">Supplier 1</option>
              <option value="Supplier2">Supplier 2</option>
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
            <label>Return Date</label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
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

export default PurchaseReturnCreat;
