// src/components/AddBloodInventory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBloodInventory = () => {
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [donorId, setDonorId] = useState('');
  const [error, setError] = useState(null);
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/donor'); // Adjust to your endpoint
        setDonors(response.data);
      } catch (error) {
        setError('Error fetching donors');
        console.error(error);
      }
    };

    fetchDonors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bloodData = {
      bloodType,
      quantity,
      expirationDate,
      donorId,
    };

    try {
      await axios.post('http://localhost:5000/api/bloodInventory/add', bloodData);
      navigate('/inventory'); // Navigate back to the inventory list after submission
    } catch (error) {
      setError('Error adding blood entry');
      console.error('Error adding blood entry:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Blood Entry</h2>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Blood Type:</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            required
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity:</label>
          <input
            type="number"
            className="mt-1 block w-full border-gray-300 rounded-md"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Expiration Date:</label>
          <input
            type="date"
            className="mt-1 block w-full border-gray-300 rounded-md"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Donor:</label>
          <select
            className="mt-1 block w-full border-gray-300 rounded-md"
            value={donorId}
            onChange={(e) => setDonorId(e.target.value)}
            required
          >
            <option value="">Select Donor</option>
            {donors.map((donor) => (
              <option key={donor._id} value={donor._id}>
                {donor.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Blood Entry
        </button>
      </form>
    </div>
  );
};

export default AddBloodInventory;
