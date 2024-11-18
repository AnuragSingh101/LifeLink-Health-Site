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
  const [selectedUser, setSelectedUser] = useState(null); // State to manage selected user for the popup

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
  const handleApprove = async (user) => {
    try {
      // Send the campaignId and userId to the backend to approve the user
      const response = await axios.post(
        `http://localhost:5000/api/campaign/registration/approve/${campaignId}/${user._id}`
      );
  
      if (response.status === 200) {
        // If the approval is successful, move the user to the approved list in the frontend state
        setApprovedUsers([...approvedUsers, user]);
        setRegisteredUsers(registeredUsers.filter((u) => u._id !== user._id));
  
        // Optionally, show a success message or notification
        alert('User approved and saved to the approved list.');
      }
  
      setSelectedUser(null); // Close the modal after approval
    } catch (error) {
      console.error('Error approving user:', error);
      alert('An error occurred while approving the user.');
    }
  };
  

  // Handle Reject action
  const handleReject = async (user) => {
    try {
      await axios.post(`http://localhost:5000/api/campaign/reject/${user._id}`);
      setRejectedUsers([...rejectedUsers, user]);
      setRegisteredUsers(registeredUsers.filter((u) => u._id !== user._id));
      setSelectedUser(null); // Close modal after rejection
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  // Navigate to Approved Users Page
  const goToApprovedPage = () => {
    navigate('/approved-users', { state: { users: approvedUsers } });
  };

  // Navigate to Rejected Users Page
  const goToRejectedPage = () => {
    navigate('/rejected-users', { state: { users: rejectedUsers } });
  };

  // Function to open the modal with user details
  const openModal = (user) => {
    setSelectedUser(user);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Registered Users</h2>

      {registeredUsers.length === 0 ? (
        <p className="text-center text-gray-500">No users registered yet.</p>
      ) : (
        <ul>
          {registeredUsers.map((user) => (
            <li
              key={user._id}
              className="border-b py-4 flex justify-between items-center cursor-pointer"
              onClick={() => openModal(user)} // Open modal on click
            >
              <div>
                <p className="font-semibold">{user.fullName}</p>
                <p className="text-gray-600">{user.email}</p>
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

      {/* Modal for showing donor details with Approve/Reject buttons and File Upload */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-xl font-bold mb-4">Donor Details</h3>
            <p><strong>Name:</strong> {selectedUser.fullName}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Address:</strong> {selectedUser.address}</p>

            {/* File Upload Section */}
            <div className="mt-4">
              <label className="block font-semibold mb-2">Upload Blood Details:</label>
              <input
                type="file"
                className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer"
                placeholder="Choose file"
              />
            </div>

            {/* Approve and Reject Buttons inside the modal */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => handleApprove(selectedUser)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
              >
                <FaCheck className="mr-1" /> Approve
              </button>
              <button
                onClick={() => handleReject(selectedUser)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center"
              >
                <FaTimes className="mr-1" /> Reject
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredUsers;
