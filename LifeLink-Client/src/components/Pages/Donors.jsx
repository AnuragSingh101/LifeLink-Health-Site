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
    <div>
      <h1>Donors Details</h1>
      {donors.length === 0 ? (
        <p>No donors available.</p>
      ) : (
        <ul>
          {donors.map((donor, index) => (
            <li key={index}>
              <strong>Name:</strong> {donor.name}<br />
              <strong>Age:</strong> {donor.age}<br />
              <strong>Blood Type:</strong> {donor.bloodType}<br />
              <strong>Contact Number:</strong> {donor.contactNumber}<br />
              <strong>Last Donation Date:</strong> {new Date(donor.lastDonationDate).toLocaleDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
