import React from "react";
import { Line } from "react-chartjs-2";
import { sales } from "../component/dummy";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);


const LineChart = () => {
  // Prepare data for the chart
  const labels = sales.map((item) => item.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Amount Sold",
        data: sales.map((item) => parseInt(item.amount.replace(/,/g, ""), 10)), // Parsing amount to integer
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Data",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
