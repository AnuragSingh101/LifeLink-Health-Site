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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Blood Inventory List</h1>
      {bloodInventory.length === 0 ? (
        <p>No blood inventory available.</p>
      ) : (
        <ul>
          {bloodInventory.map((blood, index) => (
            <li key={index}>
              <strong>Blood Type:</strong> {blood.bloodType}<br />
              <strong>Quantity:</strong> {blood.quantity}<br />
              <strong>Status:</strong> {blood.status}<br />
              <strong>Donor Name:</strong> {blood.donorId?.name || 'N/A'}<br />
              <strong>Expiration Date:</strong> {new Date(blood.expirationDate).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BloodInventoryList;
