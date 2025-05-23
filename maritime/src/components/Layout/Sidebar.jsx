import React from 'react';
import { FaChartLine, FaShip, FaMapMarkedAlt, FaUsers, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Navigation</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#dashboard"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaChartLine className="mr-3" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#vessels"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaShip className="mr-3" />
              Vessels
            </a>
          </li>
          <li>
            <a
              href="#tracking"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaMapMarkedAlt className="mr-3" />
              Tracking
            </a>
          </li>
          <li>
            <a
              href="#crew"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaUsers className="mr-3" />
              Crew
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
            >
              <FaCog className="mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;