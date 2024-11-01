// src/Components/CampaignPage.jsx
import React from 'react';
import CampaignList from './CampaignCard'; // Ensure this is the correct component for listing campaigns

const CampaignsPage = () => {
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
      `}</style>
      
      <h1 className="title">Upcoming Blood Donation Campaigns</h1>
      <p className="description">
        Join us in our efforts to save lives through blood donation. Here are the upcoming campaigns you can participate in.
      </p>
      <CampaignList />
    </div>
  );
};

export default CampaignsPage;
