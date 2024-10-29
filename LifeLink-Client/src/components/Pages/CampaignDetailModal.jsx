// src/components/CampaignDetailModal.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampaignDetailModal = ({ campaign, onClose }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Navigate to the registration page with campaign ID
    navigate(`/registration`, { state: { campaignId: campaign._id } });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 rounded-lg shadow-lg relative">
        <h3 className="text-2xl font-semibold text-red-500">{campaign.title}</h3>
        <p className="text-gray-600 mt-2">{campaign.description}</p>
        <p className="text-gray-500 mt-1">
          <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
        </p>
        <p className="text-gray-500">
          <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
        </p>
        <p className="text-gray-500 mt-1">
          <strong>Location:</strong> {campaign.location}
        </p>
        <p className="text-gray-500 mt-1">
          <strong>Organizer:</strong> {campaign.organizer}
        </p>
        <p className="text-gray-500 mt-1">
          <strong>Contact:</strong> {campaign.contactInfo.phone}, {campaign.contactInfo.email}
        </p>

        <button 
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={handleRegisterClick}
        >
          Register for Campaign
        </button>

        <button 
          className="mt-2 text-gray-500 hover:text-red-500 absolute top-2 right-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CampaignDetailModal;
