import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCampaign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    organizer: '',
    contactInfo: {
      phone: '',
      email: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('contactInfo.')) {
      const field = name.split('.')[1]; // Get the field name after 'contactInfo.'
      setFormData((prevState) => ({
        ...prevState,
        contactInfo: {
          ...prevState.contactInfo,
          [field]: value
        }
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/campign/add/', formData);
      console.log('Campaign created successfully:', response.data);
      navigate('/campaign'); // Navigate to the campaigns page after successful submission
    } catch (error) {
      console.error('Error creating campaign:', error);
    }
  };

  return (
    <div className="container">
      <style>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #2c3e50;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          color: #4b5563;
        }
        input, textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #0077b6; /* Calm Blue */
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005f8c; /* Darker shade for hover effect */
        }
      `}</style>
      
      <h1>Add New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organizer">Organizer</label>
          <input
            type="text"
            id="organizer"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo.phone">Contact Phone</label>
          <input
            type="text"
            id="contactInfo.phone"
            name="contactInfo.phone"
            value={formData.contactInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactInfo.email">Contact Email</label>
          <input
            type="email"
            id="contactInfo.email"
            name="contactInfo.email"
            value={formData.contactInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Campaign</button>
      </form>
    </div>
  );
};

export default AddCampaign;
