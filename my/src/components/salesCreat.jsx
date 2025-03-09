import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sales.css";
import Header from "./header";
import SideBar from "./sideBar";


const SalesCreat = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [showClientForm, setShowClientForm] = useState(false);
    const [showProductForm, setShowProductForm] = useState(false);
    const [formData, setFormData] = useState({
    client: "",
    products: [],
    Reference: "",
    poReference:"",
    paymentTerms: "",
    addPayment:"",
    discount:"",
    discountType:"",
    transport:"",
    invoiceTax: "",
    totalTax: "",
    netTax:"",
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
    <div className="salesInvoice-container" style={{ padding: "20px" }} >
        <Header />
        <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     
        <div className="head">
     <h2>Create Invoice </h2>
     <button className="bck-btn"  onClick={() => navigate('/sales')}>back</button>
     </div>
      <form onSubmit={handleSubmit} className="sales-form">
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        
          <div style={{ flex: "1 1 45%" }}>
            <label>Client *</label>
            <select
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
            >
              <option value="">Walking Client</option>
              <option value="">Client 2</option>
              <option value="">Client 3</option>
            </select>
            <button
    type="button"
    style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer' }}
    onClick={() => setShowClientForm(true)}
  >
    ➕
  </button>
          </div>
          {showClientForm && (
    <div className="modal-overlay">
        <div className="client-modal">
            <h3 style={{ marginBottom: '10px' }}>Create Client</h3>

            <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ flex: 1 }}>
                    <label>Name *</label>
                    <input type="text" placeholder="Enter a name" />
                </div>
                <div style={{ flex: 1 }}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email address" />
                </div>
                 </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "5px" }}>
                    <select defaultValue="NG" style={{ width: "80px" }}>
                        <option value="NG">🇳🇬 +234</option>
                        <option value="US">🇺🇸 +1</option>
                        <option value="GB">🇬🇧 +44</option>
                    </select>
                    <input type="text" placeholder="Contact Number" style={{ flex: 1 }} />
                </div>
                <div style={{ flex: 1 }}>
                    <label>Company Name</label>
                    <input type="text" placeholder="Enter a company name" />
                </div>
           
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>Address</label>
                <textarea placeholder="Enter an address" rows={2} style={{ width: "100%" }}></textarea>
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <div style={{ flex: 1 }}>
                    <label>Image</label>
                    <input type="file" />
    </div>
     <div style={{ flex: 1 }}>
    <label>Status</label>
    <select>
       <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
       </select>
        </div>
            </div>
         <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", gap: "10px" }}>
        <button onClick={() => setShowClientForm(false)} style={{ padding: "8px 16px" }}>Cancel</button>
        <button style={{ padding: "8px 16px", background: "purple", color: "white", border: "none" }}>Save</button>
            </div>
        </div>
    </div>
)}        
 <div style={{ flex: "1 1 45%" }}>
            <label> Reference</label>
            <input
              type="text"
              name="Reference"
              placeholder="Enter  reference"
              value={formData.Reference}
              onChange={handleChange}
            />
          </div>


          <div style={{ flex: "1 1 90%" }}>
            <label>Select Products *</label>
            <input
              type="text"
              placeholder="Search products"
              name="products"
              value={formData.products}
              onChange={(e) =>
                setFormData({ ...formData, products: e.target.value.split(",") })
              }
              required
            />
             <button
    type="button"
    style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer' }}
    onClick={() => setShowProductForm(true)}
  >
    ➕
  </button>
          </div>
          {showProductForm && (
    <div className="modal-overlay">
        <div className="product-modal">
            <h3 style={{ marginBottom: '10px' }}>Create Product</h3>

            <div className="product-grid">

                <div>
                    <label>Item Name *</label>
                    <input type="text" placeholder="Enter a name" />
                </div>
                <div>
                    <label>Item Model</label>
                    <input type="text" placeholder="Enter a model" />
                </div>

                <div>
                    <label>Item Code *</label>
                    <input type="text" placeholder="000002" />
                </div>
                <div>
                    <label>Barcode Symbology *</label>
                    <select>
                        <option value="CODE128">CODE128</option>
                        <option value="EAN13">EAN13</option>
                    </select>
                </div>

                <div>
                    <label>Sub Category *</label>
                    <select>
                        <option value="">Select a category</option>
                        <option value="cat1">Category 1</option>
                    </select>
                </div>
                <div>
                    <label>Brand</label>
                    <select>
                        <option value="">Select a brand</option>
                        <option value="brand1">Brand 1</option>
                    </select>
                </div>

                <div>
                    <label>Unit *</label>
                    <select>
                        <option value="">Select a unit</option>
                        <option value="piece">Piece</option>
                    </select>
                </div>
                <div>
                    <label>Product Tax *</label>
                    <select>
                        <option value="VAT@0">VAT@0</option>
                        <option value="VAT@20">VAT@20</option>
                    </select>
                </div>
                <div>
                    <label>Tax Type *</label>
                    <select>
                        <option value="Exclusive">Exclusive</option>
                        <option value="Inclusive">Inclusive</option>
                    </select>
                </div>
                <div>
                    <label>Regular Price *</label>
                    <input type="text" placeholder="Enter regular price" />
                </div>

            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                <button onClick={() => setShowProductForm(false)} style={{ padding: "8px 16px" }}>Cancel</button>
                <button style={{ padding: "8px 16px", background: "purple", color: "white", border: "none" }}>Save</button>
            </div>
        </div>
    </div>
)}
         <div style={{ flex: "1 1 30%" }}>
            <label>Discount Type</label>
            <select
              name="discountType"
              value={formData.discountType}
              onChange={handleChange}
              required
            >
              <option value="Fixed">Fixed</option>
              <option value="Percentage%">Percentage%</option>
            </select>
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Discount</label>
            <input
              type="text"
              name="Discount"
              placeholder="Enter discount"
              value={formData.discount}
              disabled
            />
          </div>
          <div style={{ flex: "1 1 30%" }}>
            <label>Transport Cost</label>
            <input
              type="text"
              name="transport"
              placeholder="Enter transport cost"
              value={formData.transport}
              disabled
            />
          </div>
          
            <div style={{ flex: "1 1 30%" }}>
            <label>invoice Tax *</label>
            <select
              name="invoiceTax"
              value={formData.invoiceTax}
              onChange={handleChange}
              required
            >
              <option value="VAT@0">VAT@0</option>
              <option value="VAT@10">VAT@10</option>
              <option value="VAT@20">VAT@20</option>
            </select>
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Total Tax</label>
            <input
              type="text"
              name="totalTax"
              placeholder="0"
              value={formData.totalTax}
              disabled
            />
          </div>
          <div style={{ flex: "1 1 30%" }}>
            <label>Net Tax</label>
            <input
              type="text"
              name="netTax"
              placeholder="0"
              value={formData.netTax}
              disabled
            />
          </div>
          
         <div style={{ flex: "1 1 30%" }}>
            <label>PO Reference</label>
            <input
              type="text"
              name="poReference"
              placeholder="Enter PO reference"
              value={formData.poReference}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Payment Terms</label>
            <input
              type="text"
              name="paymentTerms"
              placeholder="Enter payment terms"
              value={formData.paymentTerms}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label>Add Payment?</label>
            <select
              name="purchaseTax"
              value={formData.addPayment}
              onChange={handleChange}
              required
            >
              <option value="Select an option">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          
          <div style={{ flex: "1 1 30%" }}>
            <label>Delivery Place </label>
            <input
              type="text"
              name="delivery"
              value={formData.delivery}
              onChange={handleChange}
            />
          </div>

          <div style={{ flex: "1 1 30%" }}>
            <label> Date</label>
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

export default SalesCreat;
