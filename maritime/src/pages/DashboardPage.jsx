import React, { useState, useContext } from 'react';
import Layout from '../components/Layout/Layout';
import AuthContext from '../utils/authContext';
import StatCards from '../components/Dashboard/StatCards';
import Charts from '../components/Dashboard/Charts';
import ShipSearch from '../components/Dashboard/ShipSearch';
import ShipDetails from '../components/Dashboard/ShipDetails';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [shipResults, setShipResults] = useState(null);

  const handleSearchResults = (data) => {
    setShipResults(data);
  };

  return (
     <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome to the Maritime Dashboard, {user?.name || 'User'}
        </h1>
        <p className="text-gray-600">
          Here's an overview of your maritime operations
        </p>
      </div>

      <StatCards />
      
      <ShipSearch onSearchResults={handleSearchResults} />
      
      {shipResults && <ShipDetails shipData={shipResults} />}
      
      <Charts />
 </>
  );
};

export default DashboardPage;