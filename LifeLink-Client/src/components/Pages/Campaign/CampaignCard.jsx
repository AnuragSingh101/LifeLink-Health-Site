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
    <div className="campaign-list">
      
      <style>{`
        .campaign-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          padding: 16px;
        }
        .campaign-card {
          position: relative;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .campaign-card:hover {
          transform: scale(1.05);
        }
        .card-content {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s;
        }
        .card-content:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-title {
          font-size: 24px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 8px;
        }
        .card-description {
          color: gray;
          margin-top: 8px;
        }
        .card-detail {
          margin-top: 16px;
          display: flex;
          align-items: center;
          color: gray;
          margin-bottom: 8px;
        }
        .card-icon {
          margin-right: 8px;
          color: #f39c12;
          font-size: 20px;
        }
        .card-detail strong {
          font-weight: 600;
        }
      `}</style>

      {campaigns.map((campaign) => (
        <div
          key={campaign._id}
          className="campaign-card"
          onClick={() => setSelectedCampaign(campaign)} // Set selected campaign on click
        >
          <div className="card-content">
            <h3 className="card-title">{campaign.title}</h3>
            <p className="card-description">{campaign.description}</p>
            <div className="card-detail">
              <FaCalendarAlt className="card-icon" />
              <span>
                <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
              </span>
            </div>
            <div className="card-detail">
              <FaCalendarAlt className="card-icon" />
              <span>
                <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
              </span>
            </div>
            <div className="card-detail">
              <FaMapMarkerAlt className="card-icon" />
              <span><strong>Location:</strong> {campaign.location}</span>
            </div>
            <div className="card-detail">
              <FaUsers className="card-icon" />
              <span><strong>Participants:</strong> {campaign.participants || 0}</span>
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
