import React from 'react';

const ShipDetails = ({ shipData }) => {
  if (!shipData || !shipData.ships || shipData.ships.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Ship Search Results</h3>
      
      <p className="mb-3 text-gray-600">Found {shipData.count} ship(s)</p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Ship Name</th>
              <th className="py-2 px-4 border-b text-left">IMO</th>
              <th className="py-2 px-4 border-b text-left">Flag</th>
              <th className="py-2 px-4 border-b text-left">Ship Type</th>
              <th className="py-2 px-4 border-b text-left">Gross Tonnage</th>
              <th className="py-2 px-4 border-b text-left">Year Built</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipData.ships.map((ship) => (
              <tr key={ship.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b font-medium">{ship.name}</td>
                <td className="py-2 px-4 border-b">{ship.imo}</td>
                <td className="py-2 px-4 border-b">{ship.flag}</td>
                <td className="py-2 px-4 border-b">{ship.shipType}</td>
                <td className="py-2 px-4 border-b">{ship.grossTonnage}</td>
                <td className="py-2 px-4 border-b">{ship.yearBuilt}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    ship.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {ship.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipDetails;