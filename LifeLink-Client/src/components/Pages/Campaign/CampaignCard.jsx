import React, { useEffect, useState } from 'react';
import CampaignDetailModal from './CampaignDetailModal'; // Import the modal component
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'; // Import icons
import styled from 'styled-components';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 16px;
`;

const CampaignCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #0077b6; /* Calm Blue */
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  color: #4b5563; /* Dark Gray */
  margin-top: 8px;
`;

const CardDetail = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  color: #4b5563; /* Dark Gray */
  margin-bottom: 8px;
`;

const CardIcon = styled.span`
  margin-right: 8px;
  color: #f39c12; /* Yellow for icons */
  font-size: 20px;
`;

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
    <ListContainer>
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign._id}
          onClick={() => setSelectedCampaign(campaign)} // Set selected campaign on click
        >
          <CardContent>
            <CardTitle>{campaign.title}</CardTitle>
            <CardDescription>{campaign.description}</CardDescription>
            <CardDetail>
              <FaCalendarAlt className="card-icon" />
              <span>
                <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
              </span>
            </CardDetail>
            <CardDetail>
              <FaCalendarAlt className="card-icon" />
              <span>
                <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
              </span>
            </CardDetail>
            <CardDetail>
              <FaMapMarkerAlt className="card-icon" />
              <span><strong>Location:</strong> {campaign.location}</span>
            </CardDetail>
            <CardDetail>
              <FaUsers className="card-icon" />
              <span><strong>Participants:</strong> {campaign.participants || 0}</span>
            </CardDetail>
          </CardContent>
        </CampaignCard>
      ))}
      {selectedCampaign && ( // Show modal only for selected campaign
        <CampaignDetailModal
          campaign={selectedCampaign}
          onClose={() => setSelectedCampaign(null)} // Close modal function
        />
      )}
    </ListContainer>
  );
};

export default CampaignList;
