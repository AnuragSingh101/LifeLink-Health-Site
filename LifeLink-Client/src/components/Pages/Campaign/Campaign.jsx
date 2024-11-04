import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignList from './CampaignCard'; // Ensure this is the correct component for listing campaigns

const CampaignsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Check if the user is logged in
    if (!token) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  // Function to check if the user is an admin
  const isAdmin = () => {
    const role = localStorage.getItem('role'); // Get user role from local storage
    return role === 'admin'; // Adjust this condition based on how roles are stored
  };

  // Function to handle the button click
  const handleAddCampaign = () => {
    navigate('/add-campaign'); // Change this to your add campaign route
  };

  return (
    <div className="container">
      <style>{`
        .container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #ebf8ff, #bfdbfe);
          padding: 1.5rem;
        }
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 2rem;
        }
        .description {
          font-size: 1.125rem;
          color: #4b5563;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .add-campaign-button {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .button {
          background-color: #0077b6; /* Calm Blue */
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #005f8c; /* Darker shade for hover effect */
        }
      `}</style>
      
      <h1 className="title">Upcoming Blood Donation Campaigns</h1>
      <p className="description">
        Join us in our efforts to save lives through blood donation. Here are the upcoming campaigns you can participate in.
      </p>

      {isAdmin() && (
        <div className="add-campaign-button">
          <button className="button" onClick={handleAddCampaign}>
            Add New Campaign
          </button>
        </div>
      )}

      <CampaignList />
    </div>
  );
};

export default CampaignsPage;
