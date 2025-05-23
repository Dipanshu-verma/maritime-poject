import React, { useState } from 'react';
import { searchShip } from '../../services/api';

const ShipSearch = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setError('Please enter a ship name');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      const response = await searchShip(searchTerm);
      onSearchResults(response.data.data);
      
    } catch (err) {
      setError('Failed to fetch ship data. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Ship Search</h3>
      
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Enter ship name (e.g., MAERSK SELETAR)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 sm:mt-0"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {error && (
        <div className="mt-3 text-red-600 text-sm">{error}</div>
      )}
    </div>
  );
};

export default ShipSearch;