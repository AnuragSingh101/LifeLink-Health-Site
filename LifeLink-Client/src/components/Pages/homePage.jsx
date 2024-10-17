// HomePage.js
import React from 'react';
import bloodDonationImage from './bgimg.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); // Use the hook to get the navigate function

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-32" style={{ paddingLeft: '11cm', paddingRight: '11cm' }}>
        {/* Left Column with Image */}
        <div className="rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 md:mb-0">
          <img
            src={bloodDonationImage}
            alt="Blood Donation"
            className="w-64 h-64 object-cover"
          />
        </div>

        {/* Right Column with Content */}
        <div className="md:ml-16">
          <h2 className="text-4xl font-bold mt-6">DONATE BLOOD <br /> SAVE LIVES</h2>
          <button
            onClick={() => navigate('/login')}  // Add the navigation on button click
            className="mt-6 px-8 py-2 bg-red-500 text-white font-bold rounded-full hover:bg-red-600"
          >
            TO SITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
