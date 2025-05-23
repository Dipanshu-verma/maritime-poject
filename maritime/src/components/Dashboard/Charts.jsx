import React from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = () => {
  // Sample data for line chart (Monthly shipping volumes)
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Shipping Volume (TEU)',
        data: [12500, 14200, 13800, 15500, 14900, 16200],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  // Sample data for bar chart (Port calls by vessel type)
  const barData = {
    labels: ['Container', 'Bulk Carrier', 'Tanker', 'Ro-Ro', 'Cruise'],
    datasets: [
      {
        label: 'Port Calls',
        data: [65, 42, 38, 27, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  // Sample data for pie chart (Fleet composition by vessel type)
  const pieData = {
    labels: ['Container', 'Bulk Carrier', 'Tanker', 'Ro-Ro', 'Others'],
    datasets: [
      {
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
     
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Fleet Composition</h3>
        <div className="w-full flex justify-center">
          <div style={{ width: '300px', height: '300px' }}>
            <Pie data={pieData} options={{ maintainAspectRatio: true }} />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Maritime News</h3>
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="font-medium">New Emission Standards Coming into Effect</p>
            <p className="text-sm text-gray-600">May 18, 2025</p>
          </li>
          <li className="border-b pb-2">
            <p className="font-medium">Major Shipping Line Announces Fleet Expansion</p>
            <p className="text-sm text-gray-600">May 15, 2025</p>
          </li>
          <li className="border-b pb-2">
            <p className="font-medium">Port Congestion Eases in Asian Hubs</p>
            <p className="text-sm text-gray-600">May 10, 2025</p>
          </li>
          <li>
            <p className="font-medium">New Digital Solutions for Maritime Security</p>
            <p className="text-sm text-gray-600">May 5, 2025</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Charts;