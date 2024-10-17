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
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Blood Inventory List</h1>
      {bloodInventory.length === 0 ? (
        <p className="text-center text-gray-600">No blood inventory available.</p>
      ) : (
        <ul className="space-y-6">
          {bloodInventory.map((blood, index) => (
            <li key={index} className="p-6 border border-red-500 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-red-700">Blood Information</h2>
              <div className="flex justify-between text-gray-800 mt-2">
                <p><strong>Blood Type:</strong> {blood.bloodType}</p>
                <p><strong>Quantity:</strong> {blood.quantity}G</p>
                <p><strong>Status:</strong> {blood.status}</p>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <p><strong>Donor Name:</strong> {blood.donorId?.name || 'N/A'}</p>
                <p><strong>Expiration Date:</strong> {new Date(blood.expirationDate).toLocaleDateString()}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BloodInventoryList;
