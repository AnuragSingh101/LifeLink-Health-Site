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
    <div className="container">
      <style>{`
        .container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: linear-gradient(to bottom, #FFE4E6, #F3F4F6);
          min-height: 100vh;
        }
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2563EB;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .emptyMessage {
          text-align: center;
          color: #6B7280;
        }
        .donorList {
          list-style-type: none;
          padding: 0;
        }
        .donorItem {
          padding: 1.5rem;
          border: 1px solid #2563EB;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #FFFFFF;
          transition: box-shadow 0.3s;
          margin-bottom: 1.5rem;
        }
        .donorItem:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .infoTitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1D4ED8;
        }
        .itemDetails {
          display: flex;
          justify-content: space-between;
          color: #1F2937;
          margin-top: 0.5rem;
        }
      `}</style>
      <h1 className="title">Donor Details</h1>
      {donors.length === 0 ? (
        <p className="emptyMessage">No donors available.</p>
      ) : (
        <ul className="donorList">
          {donors.map((donor, index) => (
            <li key={index} className="donorItem">
              <h2 className="infoTitle">Donor Information</h2>
              <div className="itemDetails">
                <p><strong>Name:</strong> {donor.name}</p>
                <p><strong>Age:</strong> {donor.age}</p>
                <p><strong>Blood Type:</strong> {donor.bloodType}</p>
              </div>
              <div className="itemDetails">
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
