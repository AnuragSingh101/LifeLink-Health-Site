import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CampaignList from './CampaignCard'; // Ensure this is the correct component for listing campaigns
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #e0f7fa, #bbdefb); /* Light Blue gradient for a calming effect */
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #0077b6; /* Calming Blue */
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4b5563; /* Dark Gray for readability */
  text-align: center;
  margin-bottom: 1.5rem;
`;

const AddCampaignButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #0077b6; /* Calm Blue */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f8c; /* Darker shade for hover effect */
  }
`;

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
    <PageContainer>
      <Title>Upcoming Blood Donation Campaigns</Title>
      <Description>
        Join us in our efforts to save lives through blood donation. Here are the upcoming campaigns you can participate in.
      </Description>

      {isAdmin() && (
        <AddCampaignButtonContainer>
          <Button onClick={handleAddCampaign}>
            Add New Campaign
          </Button>
        </AddCampaignButtonContainer>
      )}

      <CampaignList />
    </PageContainer>
  );
};

export default CampaignsPage;
