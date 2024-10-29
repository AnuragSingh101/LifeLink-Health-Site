import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Donors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/donor');
        setDonors(response.data);
      } catch (error) {
        console.log('Error fetching donors:', error); // Log the detailed error
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-pink-50 to-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Donor Details</h1>
      {donors.length === 0 ? (
        <p className="text-center text-gray-600">No donors available.</p>
      ) : (
        <ul className="space-y-6">
          {donors.map((donor, index) => (
            <li key={index} className="p-6 border border-blue-500 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-blue-700">Donor Information</h2>
              <div className="flex justify-between text-gray-800 mt-2">
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Age:</strong> {donor.age}</p>
                <p><strong>Blood Type:</strong> {donor.bloodType}</p>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <p><strong>Contact Number:</strong> {donor.contactNumber}</p>
                <p><strong>Last Donation Date:</strong> {new Date(donor.lastDonationDate).toLocaleDateString()}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
