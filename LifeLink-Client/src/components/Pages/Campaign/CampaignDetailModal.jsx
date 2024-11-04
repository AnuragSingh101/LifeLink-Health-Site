import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CampaignRegistrationForm from './CampaignRegistrationForm';

const CampaignDetailModal = ({ campaign, onClose }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

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
    // Navigate to the registered users page
    navigate(`/registered-users/${campaign._id}`);
  };

  return (
    <div className="modal">
      <style>{`
        .modal {
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
        }
        .modal-content {
          background-color: white;
          width: 90%;
          max-width: 600px;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          max-height: 80vh;
          overflow-y: auto;
        }
        .modal-title {
          font-size: 24px;
          font-weight: bold;
          color: #f94144; /* Using Coral Red for the title */
        }
        .modal-text {
          color: #4a4a4a;
          margin-top: 8px;
        }
        .modal-label {
          color: #6c757d;
          margin-top: 8px;
        }
        .modal-button {
          margin-top: 16px;
          color: white;
          padding: 10px 16px;
          border-radius: 4px;
          cursor: pointer;
          border: none;
        }
        .register-button {
          background-color: #f94144; /* Coral Red */
        }
        .check-users-button {
          background-color: #0077b6; /* Calm Blue */
        }
        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          color: #6c757d;
          cursor: pointer;
        }
        .user-item {
          margin: 8px 0; /* Space between user items */
        }
        .user-email {
          color: #333; /* Dark Gray for email */
        }
        .user-phone {
          color: #00b4d8; /* Soft Green for phone */
          font-style: italic; /* Italicize phone numbers for emphasis */
        }
      `}</style>

      <div className="modal-content">
        <h3 className="modal-title">{campaign.title}</h3>
        <p className="modal-text">{campaign.description}</p>
        <p className="modal-label">
          <strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}
        </p>
        <p className="modal-label">
          <strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}
        </p>
        <p className="modal-label">
          <strong>Location:</strong> {campaign.location}
        </p>
        <p className="modal-label">
          <strong>Organizer:</strong> {campaign.organizer}
        </p>
        <p className="modal-label">
          <strong>Contact:</strong> {campaign.contactInfo.phone}, {campaign.contactInfo.email}
        </p>

        <button 
          className="modal-button register-button"
          onClick={toggleFormVisibility}
        >
          Register for Campaign
        </button>
        
        <button 
          className="modal-button check-users-button"
          onClick={handleCheckRegisteredUsers} // Change the onClick handler
        >
          Check Registered Users
        </button>
        
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
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {registeredUsers.length > 0 ? (
                registeredUsers.map(user => (
                  <li key={user._id} className="user-item">
                    {user.fullName} - <span className="user-email">{user.email}</span> - <span className="user-phone">{user.phone}</span>
                  </li>
                ))
              ) : (
                <p>No registered users found.</p>
              )}
            </ul>
          </div>
        )}

        <button 
          className="close-button"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CampaignDetailModal;
