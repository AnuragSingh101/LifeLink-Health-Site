import React from 'react';
import { useLocation } from 'react-router-dom';

const ApprovedUsers = () => {
  const { state } = useLocation();
  const approvedUsers = state?.users || [];

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold text-center mb-4">Approved Users</h2>
      <ul>
        {approvedUsers.map((user) => (
          <li key={user._id} className="border-b py-2">
            <p className="font-semibold">{user.fullName}</p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedUsers;
