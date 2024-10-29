// src/components/CampaignList.js

import React, { useEffect, useState } from 'react';
import CampaignDetailModal from './CampaignDetailModal'; // Import the modal component

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null); // State to track the selected campaign

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/campign');
        if (!response.ok) throw new Error('Failed to fetch campaign data');
        const data = await response.json();
        setCampaigns(data.campaigns);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  if (!campaigns.length) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {campaigns.map((campaign) => (
        <div 
          key={campaign._id} 
          className="relative cursor-pointer" 
          onClick={() => setSelectedCampaign(campaign)} // Set selected campaign on click
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-red-500">{campaign.title}</h3>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
            <p className="text-gray-500 mt-1">
              <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
            </p>
            <p className="text-gray-500">
              <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
      {selectedCampaign && ( // Show modal only for selected campaign
        <CampaignDetailModal 
          campaign={selectedCampaign} 
          onClose={() => setSelectedCampaign(null)} // Close modal function
        />
      )}
    </div>
  );
};

export default CampaignList;
