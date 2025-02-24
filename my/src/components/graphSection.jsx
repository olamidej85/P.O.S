import React from "react";
import { Line } from "react-chartjs-2";
import "./GraphSection.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphSection = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Payment Sent",
        data: [100000, 120000, 150000, 170000, 200000, 250000],
        borderColor: "#EF4444",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#EF4444",
      },
      {
        label: "Payment Received",
        data: [80000, 110000, 140000, 160000, 180000, 220000],
        borderColor: "#22C55E",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "#22C55E",
      },
    ],
  };

  return (
    <div className="graph-section">
      
      <div className="line-chart-container">
        <h3>Payment Sent vs Payment Received (2025)</h3>
        <Line data={lineChartData} />
      </div>
    </div>
    
  );
};

export default GraphSection;
