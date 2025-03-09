import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Purchases.css";
import SideBar from "./sideBar";
import Header from "./header";

const Purchases = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  return (
    <div className={`page-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
    <div className="page-layout">
    <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="purchases-container">
      <Header />
      <div className="purchases-header">
        <h3>Purchases</h3>
        <div className="action-buttons">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            🔙 Back
          </button>
          <button className="refresh-button">🔄</button>
          <button className="download-button">⬇️</button>
          <button className="export-button">📄</button>
          <button className="print-button">🖨️</button>
          <button className="create-button"  onClick={() => navigate('/purchaseCreat')}>Create ➕</button>
        </div>
      </div>
      <div className="purchases-search-filter-section">
        <input type="text" placeholder="Search..." className="purchases-search-box" />
        <button className="purchases-date-filter-button">From - To</button>
      </div>
      <div className="purchases-table-wrapper">
      <table className="purchases-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Purchase No</th>
            <th>Date</th>
            <th>Supplier</th>
            <th>Subtotal</th>
            <th>Transport</th>
            <th>Discount</th>
            <th>Net Total</th>
            <th>Total Paid</th>
            <th>Total due </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a href="#">APP–1</a>
            </td>
            <td>15th Jan, 2025</td>
            <td>Jemima Hoffman</td>
            <td>$29800.00</td>
            <td>$1000.00</td>
            <td>$500.00</td>
            <td>$26724.00</td>
            <td>$0</td>
            <td>$26724.00</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#">APP–2</a>
            </td>
            <td>15th Jan, 2025</td>
            <td>Amir Vega</td>
            <td>$29800.00</td>
            <td>$0</td>
            <td>$0</td>
            <td>$16390.00</td>
            <td>$25000.00</td>
            <td>$0</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a href="#">APP–3</a>
            </td>
            <td>15th Jan, 2025</td>
            <td>Quyn Erickson</td>
            <td>$31250.00</td>
            <td>$500.00</td>
            <td>$200.00</td>
            <td>$34675.00</td>
            <td>$30000.00</td>
            <td>$45788.00</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a href="#">APP–4</a>
            </td>
            <td>15th Jan, 2025</td>
            <td>Carla Bender</td>
            <td>$31377.50</td>
            <td>$0</td>
            <td>$0</td>
            <td>$31377.50</td>
            <td>$31377.50</td>
            <td>$64460.00</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a href="#">APP–5</a>
            </td>
            <td>15th Jan, 2025</td>
            <td>Carla Bender</td>
            <td>$58600.00</td>
            <td>$0</td>
            <td>$0</td>
            <td>$64460.00</td>
            <td>$0</td>
            <td>$64460.00</td>
            <td> <button className="btn"> Active</button> </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
    </div>
  );
}
export default Purchases;