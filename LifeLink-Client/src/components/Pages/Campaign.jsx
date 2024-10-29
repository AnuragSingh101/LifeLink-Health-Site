// src/Components/CampaignPage.jsx
import React from 'react';
import CampaignList from './CampaignCard'; // Ensure this is the correct component for listing campaigns

const CampaignsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-[#2c3e50] mb-8">Upcoming Blood Donation Campaigns</h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Join us in our efforts to save lives through blood donation. Here are the upcoming campaigns you can participate in.
      </p>
      <CampaignList />
    </div>
  );
};

export default CampaignsPage;
