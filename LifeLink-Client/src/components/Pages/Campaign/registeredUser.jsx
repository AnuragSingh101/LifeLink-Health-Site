import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaCheck, FaTimes } from 'react-icons/fa';

const RegisteredUsers = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  // Fetch registered users from the backend
  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/campign/registration/${campaignId}/registrations`
        );
        setRegisteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching registered users:', error);
      }
    };

    fetchRegisteredUsers();
  }, [campaignId]);

  // Handle Approve action
  const handleApprove = (user) => {
    setApprovedUsers([...approvedUsers, user]);
    setRegisteredUsers(registeredUsers.filter((u) => u._id !== user._id));
  };

  // Handle Reject action
  const handleReject = (user) => {
    setRejectedUsers([...rejectedUsers, user]);
    setRegisteredUsers(registeredUsers.filter((u) => u._id !== user._id));
  };

  // Navigate to Approved Users Page
  const goToApprovedPage = () => {
    navigate('/approved-users', { state: { users: approvedUsers } });
  };

  // Navigate to Rejected Users Page
  const goToRejectedPage = () => {
    navigate('/rejected-users', { state: { users: rejectedUsers } });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Registered Users</h2>

      {registeredUsers.length === 0 ? (
        <p className="text-center text-gray-500">No users registered yet.</p>
      ) : (
        <ul>
          {registeredUsers.map((user) => (
            <li key={user._id} className="border-b py-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">{user.fullName}</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApprove(user)}
                  className="flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  <FaCheck className="mr-1" /> Approve
                </button>
                <button
                  onClick={() => handleReject(user)}
                  className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  <FaTimes className="mr-1" /> Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Navigation Buttons to Approved and Rejected Users Pages */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={goToApprovedPage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Approved Users
        </button>
        <button
          onClick={goToRejectedPage}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          View Rejected Users
        </button>
      </div>
    </div>
  );
};

export default RegisteredUsers;
