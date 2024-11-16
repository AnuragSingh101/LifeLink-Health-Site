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
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Registered Users</h2>

      <ul className="space-y-4">
        {registeredUsers.map(user => (
          <li key={user._id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <p className="font-semibold">{user.fullName}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Approve</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredUsers;
