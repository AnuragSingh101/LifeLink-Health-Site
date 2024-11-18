import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CampaignRegistrationForm from './CampaignRegistrationForm';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 90%;
  max-width: 600px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #0077b6; /* Calm Blue */
`;

const ModalText = styled.p`
  color: #4a4a4a; /* Dark Gray */
  margin-top: 8px;
`;

const ModalLabel = styled.p`
  color: #6c757d;
  margin-top: 8px;
`;

const ModalButton = styled.button`
  margin-top: 16px;
  color: white;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
`;

const RegisterButton = styled(ModalButton)`
  background-color: #f94144; /* Coral Red */
  &:hover {
    background-color: #f37272;
  }
`;

const CheckUsersButton = styled(ModalButton)`
  background-color: #0077b6; /* Calm Blue */
  &:hover {
    background-color: #005f8c;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #6c757d;
  cursor: pointer;
  font-size: 1.2rem;
`;

const UserList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const UserItem = styled.li`
  margin: 8px 0; /* Space between user items */
`;

const UserEmail = styled.span`
  color: #333; /* Dark Gray for email */
`;

const UserPhone = styled.span`
  color: #00b4d8; /* Soft Green for phone */
  font-style: italic; /* Italicize phone numbers for emphasis */
`;

const CampaignDetailModal = ({ campaign, onClose }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const navigate = useNavigate();

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const fetchRegisteredUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/campign/registration/${campaign._id}/registrations`);
      setRegisteredUsers(Array.isArray(response.data) ? response.data : []);
      setShowUsers(true);
    } catch (error) {
      console.error('Error fetching registered users:', error);
    }
  };

  const handleCheckRegisteredUsers = () => {
    navigate(`/registered-users/${campaign._id}`);
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalTitle>{campaign.title}</ModalTitle>
        <ModalText>{campaign.description}</ModalText>
        <ModalLabel>
          <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
        </ModalLabel>
        <ModalLabel>
          <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
        </ModalLabel>
        <ModalLabel>
          <strong>Location:</strong> {campaign.location}
        </ModalLabel>
        <ModalLabel>
          <strong>Organizer:</strong> {campaign.organizer}
        </ModalLabel>
        <ModalLabel>
          <strong>Contact:</strong> {campaign.contactInfo.phone}, {campaign.contactInfo.email}
        </ModalLabel>

        <RegisterButton onClick={toggleFormVisibility}>Register for Campaign</RegisterButton>
        
        <CheckUsersButton onClick={handleCheckRegisteredUsers}>Check Registered Users</CheckUsersButton>
        
        {isFormVisible && (
          <div style={{ marginTop: '16px' }}>
            <CampaignRegistrationForm 
              campaignId={campaign._id}
              onClose={onClose}
            />
          </div>
        )}

        {showUsers && (
          <div style={{ marginTop: '16px' }}>
            <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>Registered Users:</h4>
            <UserList>
              {registeredUsers.length > 0 ? (
                registeredUsers.map(user => (
                  <UserItem key={user._id}>
                    {user.fullName} - <UserEmail>{user.email}</UserEmail> - <UserPhone>{user.phone}</UserPhone>
                  </UserItem>
                ))
              ) : (
                <p>No registered users found.</p>
              )}
            </UserList>
          </div>
        )}

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default CampaignDetailModal;
