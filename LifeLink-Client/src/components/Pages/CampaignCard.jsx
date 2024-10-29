import React, { useEffect, useState } from 'react';
import CampaignDetailModal from './CampaignDetailModal'; // Import the modal component
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'; // Import icons

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null); // State to track the selected campaign

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/campign/'); // Fixed typo in endpoint
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
          className="relative cursor-pointer group" // Added group for hover effects
          onClick={() => setSelectedCampaign(campaign)} // Set selected campaign on click
        >
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">{campaign.title}</h3>
            <p className="text-gray-600 mt-2">{campaign.description}</p>
            <div className="mt-4 flex flex-col">
              <div className="flex items-center text-gray-500 mb-2">
                <FaCalendarAlt className="mr-2 text-[#f39c12] text-xl" />
                <span>
                  <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <FaCalendarAlt className="mr-2 text-[#f39c12] text-xl" />
                <span>
                  <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <FaMapMarkerAlt className="mr-2 text-[#f39c12] text-xl" />
                <span><strong>Location:</strong> {campaign.location}</span> {/* Assuming you have a location field */}
              </div>
              <div className="flex items-center text-gray-500 mb-2">
                <FaUsers className="mr-2 text-[#f39c12] text-xl" />
                <span><strong>Participants:</strong> {campaign.participants || 0}</span> {/* Assuming you have a participants field */}
              </div>
            </div>
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
