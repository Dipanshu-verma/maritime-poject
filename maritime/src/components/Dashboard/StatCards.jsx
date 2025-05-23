import React from 'react';
import { FaShip, FaAnchor, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div className="rounded-full bg-blue-100 p-3 mr-4">
          <FaShip className="text-blue-500 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Active Vessels</h3>
          <p className="text-2xl font-bold text-gray-900">42</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div className="rounded-full bg-green-100 p-3 mr-4">
          <FaAnchor className="text-green-500 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">In Port</h3>
          <p className="text-2xl font-bold text-gray-900">17</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div className="rounded-full bg-yellow-100 p-3 mr-4">
          <FaExclamationTriangle className="text-yellow-500 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Alerts</h3>
          <p className="text-2xl font-bold text-gray-900">5</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
        <div className="rounded-full bg-purple-100 p-3 mr-4">
          <FaCheckCircle className="text-purple-500 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Completed Trips</h3>
          <p className="text-2xl font-bold text-gray-900">128</p>
        </div>
      </div>
    </div>
  );
};

export default StatCards;