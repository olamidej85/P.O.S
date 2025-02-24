import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./PieChartSection.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
  const [activeTab, setActiveTab] = useState("invoices");

  const pieData = {
    labels: ["Pentium Silver N5030 15.6\"", "Inspiron 15 3510 Intel Celeron", "Celeron Silver N5030 15.6\""],
    datasets: [
      {
        data: [35, 35, 30],
        backgroundColor: ["#3B82F6", "#22C55E", "#FACC15"],
        hoverBackgroundColor: ["#2563EB", "#16A34A", "#EAB308"],
      },
    ],
  };

  const tableData = [
    { id: 1, invoice: "AP-6", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 2545, netTotal: 2464, totalDue: 2464, status: "Active" },
    { id: 2, invoice: "AP-5", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 1045, netTotal: 1045, totalDue: 1045, status: "Active" },
    { id: 3, invoice: "AP-4", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 1045, netTotal: 1045, totalDue: 1045, status: "Active" },
    { id: 4, invoice: "AP-3", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 2545, netTotal: 2545, totalDue: 0, status: "Active" },
    { id: 5, invoice: "AP-2", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 2245, netTotal: 2469.5, totalDue: 2469.5, status: "Active" },
    { id: 6, invoice: "AP-1", date: "16th Dec, 2024", client: "Troy Walker", subtotal: 18725, netTotal: 20597.5, totalDue: 5597.5, status: "Active" },
  ];

  const purchasesData = [
    { id: 1, invoice: "PU-6", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 1500, netTotal: 1400, totalDue: 1400, status: "Active" },
 
  ];

  const expensesData = [
    { id: 1, invoice: "EX-6", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 500, netTotal: 480, totalDue: 480, status: "Active" },
    
  ];

  const transactionsData = [
    { id: 1, invoice: "TR-6", date: "16th Dec, 2024", client: "Walking Customer", subtotal: 300, netTotal: 290, totalDue: 290, status: "Active" },
   
  ];

  const renderTable = (data) => (
    <table className="invoice-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Invoice No</th>
          <th>Invoice Date</th>
          <th>Client</th>
          <th>Subtotal</th>
          <th>Net Total</th>
          <th>Total Due</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td><a href="#">{row.invoice}</a></td>
            <td>{row.date}</td>
            <td>{row.client}</td>
            <td>${row.subtotal.toFixed(2)}</td>
            <td>${row.netTotal.toFixed(2)}</td>
            <td>${row.totalDue.toFixed(2)}</td>
            <td><span className="status-badge">{row.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="piechart-container">
      <div className="top-selling">
        <h3>Top Selling Products (2024)</h3>
        <div className="chart-container">
          <Pie data={pieData} />
        </div>
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <div className="tabs">
          <button className={activeTab === "invoices" ? "active-tab" : ""} onClick={() => setActiveTab("invoices")}>Invoices</button>
          <button className={activeTab === "purchases" ? "active-tab" : ""} onClick={() => setActiveTab("purchases")}>Purchases</button>
          <button className={activeTab === "expenses" ? "active-tab" : ""} onClick={() => setActiveTab("expenses")}>Expenses</button>
          <button className={activeTab === "transactions" ? "active-tab" : ""} onClick={() => setActiveTab("transactions")}>Transactions</button>
        </div>

        {activeTab === "invoices" && renderTable(tableData)}
        {activeTab === "purchases" && renderTable(purchasesData)}
        {activeTab === "expenses" && renderTable(expensesData)}
        {activeTab === "transactions" && renderTable(transactionsData)}
      </div>
    </div>
  );
};

export default Piechart;
