import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BloodInventoryList = () => {
  const [bloodInventory, setBloodInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBloodInventory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bloodInventory');
        setBloodInventory(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching blood inventory');
        setLoading(false);
      }
    };

    fetchBloodInventory();
  }, []);

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 flex items-center justify-center py-8">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Blood Inventory List</h1>
        {bloodInventory.length === 0 ? (
          <p className="text-center text-gray-600">No blood inventory available.</p>
        ) : (
          <ul className="space-y-4">
            {bloodInventory.map((blood, index) => (
              <li key={index} className="border border-gray-300 p-4 rounded-lg shadow-sm">
                <strong className="text-gray-800">Blood Type:</strong> {blood.bloodType}<br />
                <strong className="text-gray-800">Quantity:</strong> {blood.quantity}<br />
                <strong className="text-gray-800">Status:</strong> {blood.status}<br />
                <strong className="text-gray-800">Donor Name:</strong> {blood.donorId?.name || 'N/A'}<br />
                <strong className="text-gray-800">Expiration Date:</strong> {new Date(blood.expirationDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BloodInventoryList;
