import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RegisteredUsers = () => {
  const { campaignId } = useParams(); // Extract campaignId from URL params
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/campign/registration/${campaignId}/registrations`);
        setRegisteredUsers(response.data); // Assuming the response data is an array of users
      } catch (error) {
        console.error('Error fetching registered users:', error);
      }
    };

    fetchRegisteredUsers();
  }, [campaignId]); // Run the effect whenever campaignId changes

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {registeredUsers.map(user => (
          <li key={user._id}>{user.fullName} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredUsers;
