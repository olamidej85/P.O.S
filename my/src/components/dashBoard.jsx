import React, {useState} from "react";
import { useNavigate } from "react-router-dom"; 
import SideBar from "./sideBar";
import Header from "./header";
import PieChartSection from "./PieChartSection";
import "./DashBoard.css";
import GraphSection from "./graphsection";
import StockSection from "./stockSection";

const DashBoard = () => {
  const navigate = useNavigate(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  return (
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <SideBar  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="main-content">
        <Header />
        <div className="alert-box">
          <p>🚫 Delete Buttons Are Hidden In Demo Version.</p>
          <p>🚫 Demo Database Will Be Cleared Every Two Hours.</p>
          <p>🚫 Email & SMS Notifications Are Disabled In Demo Version.</p>
        </div>
        <h2>Today Summary</h2>
        <div className="summary-cards">
          <div className="card blue" onClick={() => navigate("/purchases")}>
            $173626.50 <p>Purchase</p> <a href="">More Info 🡆</a>
          </div>
          <div
            className="card teal"
            onClick={() => navigate("/purchaseReturn")}
          >
            $20860.00 <p>Purchase Return</p> <a href="">More Info 🡆</a>
          </div>
          <div className="card purple" onClick={() => navigate("/sales")}>
            $133851.25 <p>Sales</p> <a href="">More Info 🡆</a>
          </div>
          <div className="card gray" onClick={() => navigate("/salesReturns")}>
            $14980.00 <p>Sales Return</p> <a href="">More Info 🡆</a>
          </div>
          <div className="card green" onClick={() => navigate("/payments")}>
            $85000.00 <p>Payments</p> <a href="">More Info 🡆</a>
          </div>
          <div className="card navy" onClick={() => navigate("/supplierSection")}>
            $136377.50 <p>Supplier Payments</p> <a href="">More Info 🡆</a>
          </div>
          <div className="card red" onClick={() => navigate("/expensesSection")}>
            $21000.00 <p>Expenses</p> <a href="">More Info 🡆</a>
          </div>
          <div className="card orange" onClick={() => navigate("/balanceTransfer")}>
            $30000.00 <p>Balance Tranfers</p> <a href="">More Info 🡆</a>
          </div>
        </div>
        <PieChartSection />
        <GraphSection />
        <StockSection />
      </div>
    </div>
  );
};

export default DashBoard;
