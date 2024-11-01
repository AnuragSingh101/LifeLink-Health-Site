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
    <div className="form-container">
      <style>{`
        .form-container {
          padding: 24px;
          border-top: 1px solid #ccc;
          margin-top: 16px;
          width: 100%;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        .form-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .error-message {
          color: red;
          margin-bottom: 16px;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-label {
          display: block;
          font-size: 14px;
          font-weight: medium;
        }
        .form-input {
          border: 1px solid #ccc;
          padding: 12px;
          border-radius: 4px;
          width: 100%;
          margin-top: 8px;
        }
        .readonly-input {
          background-color: #f7f7f7;
          cursor: not-allowed;
        }
        .submit-button {
          background-color: #007bff;
          color: white;
          padding: 12px;
          border-radius: 4px;
          width: 100%;
          margin-top: 16px;
          cursor: pointer;
        }
      `}</style>

      <h2 className="form-title">Register for Campaign</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Removed User ID Field */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="form-label">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            readOnly
            className={`form-input readonly-input`}
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default CampaignRegistrationForm;
