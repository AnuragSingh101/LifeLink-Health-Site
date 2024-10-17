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
        console.log('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Donors Details</h1>
      {donors.length === 0 ? (
        <p className="text-gray-600 text-center">No donors available.</p>
      ) : (
        <ul className="space-y-6">
          {donors.map((donor, index) => (
            <li key={index} className="p-6 border border-red-500 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-red-700">Donor Information</h2>
              <p className="text-gray-800 mt-2"><strong>Name:</strong> {donor.name}</p>
              <p className="text-gray-800"><strong>Age:</strong> {donor.age}</p>
              <p className="text-gray-800"><strong>Blood Type:</strong> {donor.bloodType}</p>
              <p className="text-gray-800"><strong>Contact Number:</strong> {donor.contactNumber}</p>
              <p className="text-gray-800"><strong>Last Donation Date:</strong> {new Date(donor.lastDonationDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
