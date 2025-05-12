'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function PaymentChart({ principal, interest }) {
  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Amount in ₹',
        data: [principal, interest],
        backgroundColor: ['#0070f3', '#00bcd4'],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ maxWidth: 600, margin: '30px auto' }}>
      <h3 style={{ textAlign: 'center' }}>Mortgage Payment Breakdown</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
