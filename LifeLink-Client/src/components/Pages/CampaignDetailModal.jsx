import React, { useState, useEffect } from 'react';
import CampaignRegistrationForm from './CampaignRegistrationForm';

const CampaignDetailModal = ({ campaign, onClose }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const fetchRegisteredUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/campaign/${campaign._id}/registered-users`);
      setRegisteredUsers(response.data);
      setShowUsers(true);
    } catch (error) {
      console.error('Error fetching registered users:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-2/3 xl:w-1/3 p-6 rounded-lg shadow-lg relative max-h-screen overflow-y-auto">
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
          onClick={toggleFormVisibility}
        >
          Register for Campaign
        </button>
        
        {/* Button to fetch registered users */}
        <button 
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={fetchRegisteredUsers}
        >
          Check Registered Users
        </button>
        
        {/* Conditional rendering of the registration form */}
        {isFormVisible && (
          <div className="mt-4">
            <CampaignRegistrationForm 
              campaignId={campaign._id} // Pass the campaign ID
              onClose={onClose} // Close the modal on successful registration
            />
          </div>
        )}

        {/* Display registered users if showUsers is true */}
        {showUsers && (
          <div className="mt-4">
            <h4 className="text-xl font-semibold">  Check Registered Users:</h4>
            <ul className="list-disc list-inside">
              {registeredUsers.map(user => (
                <li key={user.id}>{user.fullName} - {user.email}</li>
              ))}
            </ul>
          </div>
        )}

        <button 
          className="mt-2 text-gray-500 hover:text-red-500 absolute top-2 right-2"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CampaignDetailModal;
