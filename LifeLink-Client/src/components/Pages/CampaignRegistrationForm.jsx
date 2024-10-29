import React, { useState } from 'react';
import axios from 'axios';

const CampaignRegistrationForm = ({ campaignId, onClose }) => { // Accept campaignId and onClose as props
  const [formData, setFormData] = useState({
    campaignId,
    userId: '', // You can keep this to hold the userId value but it will be set later
    fullName: '',
    email: '',
    phone: '',
    status: 'Pending', // Default status
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    // Fetch userId from local storage
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('User ID not found. Please log in.');
      return;
    }

    // Update formData with userId from local storage
    const registrationData = {
      ...formData,
      userId, // Assign the fetched userId here
    };

    try {
      const response = await axios.post('http://localhost:5000/api/campign/registration/', registrationData);
      if (response.status === 200) {
        // Show pop-up notification
        alert('You are registered successfully!');
  
        // Clear the form fields
        setFormData({
          campaignId,
          userId: '', // Reset userId field (not visible to user)
          fullName: '',
          email: '',
          phone: '',
          status: 'Pending',
        });
  
        // Reload the page
        window.location.reload();
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  return (
    <div className="p-6 border-t mt-4 w-full max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Register for Campaign</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Removed User ID Field */}
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
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            readOnly
            className="border p-3 rounded w-full mt-1 bg-gray-100 cursor-not-allowed"
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
