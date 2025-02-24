import React from "react";
import { Bar } from "react-chartjs-2";
import "./StockSection.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StockSection = () => {
  const barChartData = {
    labels: ["Jan"],
    datasets: [
      {
        label: "Purchases",
        data: [180000],
        backgroundColor: "#3B82F6", 
        borderRadius: 5,
      },
      {
        label: "Sales",
        data: [140000],
        backgroundColor: "#22C55E", 
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  const stockData = [
    { id: 1, code: "AP-000002", name: 'Celeron Silver N5030 15.6"', quantity: "21 Pcs" ,AlertQuantity: "10 Pcs" },
    { id: 2, code: "AP-000001", name: 'Pentium Silver N5030 15.6"', quantity: "22 Pcs",AlertQuantity: "10 Pcs" },
    { id: 3, code: "AP-000003", name: "Inspiron 15 3510 Intel Celeron", quantity: "23 Pcs",AlertQuantity: "10 Pcs" },
  ];

  return (
    <div className="stock-section-container">
      <div className="barchart-container">
        <h3>
          Sales vs Purchases (2025) <i className="info-icon">ℹ️</i>
        </h3>
        <div className="bar-chart-wrapper">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>

      <div className="stock-table-container">
        <h3>Stock Alert</h3>
        <table className="stock-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Code</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Alert Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td style={{ color: "blue" }}>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.AlertQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockSection;
