import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./Chart.scss";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import { useGlobalContext } from "../../context/GlobalContexts";
import { dateFormat } from "../../utils/dateFormat";

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),

    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },

      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={data} />
    </div>
  );
}

export default Chart;
