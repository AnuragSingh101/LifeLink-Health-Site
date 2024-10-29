// src/components/CampaignRegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CampaignRegistrationForm = ({ campaignId, onClose }) => {
  const [formData, setFormData] = useState({
    userId: '',
    fullName: '',
    email: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/campaign/registration', {
        ...formData,
        campaignId,
        status: 'Pending', // Set status directly here
      });

      if (response.status === 200) {
        setSuccess('Registration successful!');
        // Clear the form fields
        setFormData({
          userId: '',
          fullName: '',
          email: '',
          phone: '',
        });
        // Call the onClose function to close the modal
        onClose(); // Close the modal directly after registration
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  return (
    <div className="p-6 border-t mt-4 w-full max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register for Campaign</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium">User ID:</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
            className="border p-3 rounded w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="border p-3 rounded w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-3 rounded w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border p-3 rounded w-full mt-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default CampaignRegistrationForm;
