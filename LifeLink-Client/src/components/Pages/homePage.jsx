// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHeartbeat, FaUsers, FaRegStar, FaRegHeart, FaHandsHelping, FaDonate } from 'react-icons/fa';

const Home = () => {
  const [stats, setStats] = useState({ bloodUnits: 0, donors: 0, campaigns: 0 });

  useEffect(() => {
    const incrementStats = (key, target, delay) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setStats((prevStats) => ({ ...prevStats, [key]: count }));
      }, delay);
    };

    incrementStats("bloodUnits", 1200, 15);
    incrementStats("donors", 5000, 10);
    incrementStats("campaigns", 8, 50);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-blue-300 text-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">Join the Lifesaving Movement</h1>
        <p className="relative mt-4 text-lg md:text-2xl text-gray-100 max-w-2xl drop-shadow-md">
          Your contribution can bring hope and healing. Step up today!
        </p>
        <div className="relative mt-8 space-x-4">
          <Link to="/register" className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">Become a Donor</Link>
          <Link to="/campaigns" className="bg-blue-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition">See Campaigns</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600">About Life Link</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
          Life Link is on a mission to bridge the gap between blood donors and recipients. Join us in making blood donation accessible and life-saving for those who need it most.
        </p>
      </section>

      {/* Campaign Spotlight */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-600">Featured Campaign</h2>
        <div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src="/path-to-campaign-image.jpg" alt="Campaign" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-700">Community Blood Drive</h3>
              <p className="mt-2 text-gray-700">Join us at the City Center for our community blood drive and make a difference.</p>
              <p className="mt-4 font-semibold text-gray-800">Date: Nov 15, 2024</p>
              <p className="mt-2 font-semibold text-gray-800">Location: City Center Hall</p>
              <Link to="/campaigns/1" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white text-center">
        <h3 className="text-4xl font-bold text-[#2c3e50]">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 px-4 md:px-20">
          {/* Step 1 */}
          <div className="text-center">
            <FaRegHeart className="text-[#f39c12] text-6xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800">Register</h4>
            <p className="mt-2 text-gray-600">Sign up as a donor or campaign supporter.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center">
            <FaHandsHelping className="text-[#f39c12] text-6xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800">Find a Campaign</h4>
            <p className="mt-2 text-gray-600">Browse and join nearby blood donation events.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center">
            <FaDonate className="text-[#f39c12] text-6xl mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800">Donate</h4>
            <p className="mt-2 text-gray-600">Arrive on the scheduled date and donate safely.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Campaigns Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-600">Upcoming Campaigns</h2>
        <div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src="/path-to-upcoming-campaign-image.jpg" alt="Upcoming Campaign" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-700">Annual Blood Donation Drive</h3>
              <p className="mt-2 text-gray-700">Help us reach our goal this year to collect 500 units of blood!</p>
              <p className="mt-4 font-semibold text-gray-800">Date: Dec 10, 2024</p>
              <p className="mt-2 font-semibold text-gray-800">Location: Community Hall</p>
              <Link to="/campaigns/2" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
                Join Now
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img src="/path-to-upcoming-campaign-image.jpg" alt="Upcoming Campaign" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-3xl font-bold text-blue-700">Special Holiday Blood Drive</h3>
              <p className="mt-2 text-gray-700">Join us in giving the gift of life this holiday season.</p>
              <p className="mt-4 font-semibold text-gray-800">Date: Dec 25, 2024</p>
              <p className="mt-2 font-semibold text-gray-800">Location: Central Park</p>
              <Link to="/campaigns/3" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300 text-center">
        <p>&copy; 2024 Life Link. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
