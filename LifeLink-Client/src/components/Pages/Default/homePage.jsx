import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/image2.jpeg'; // Adjust the path as per your project structure
import NavBar from '../../navBar';

const HomePage = () => {
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

    incrementStats('bloodUnits', 1200, 15);
    incrementStats('donors', 5000, 10);
    incrementStats('campaigns', 8, 50);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Blood Donation"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh', // Full screen height
          width: '100%',
          objectFit: 'cover',
          zIndex: -1, // Ensures the image stays in the background
        }}
      />

      {/* NavBar */}
      <NavBar />
      
      {/* Content Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Vertically centers the content
        alignItems: 'center', // Horizontally centers the content
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10, // Ensure the content is above the background
        textAlign: 'center',
        color: 'red', // Red color for text
        marginTop: '210px', // Move the content section 40px above from its original place
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>Join the Lifesaving Movement</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
          Your contribution can bring <span style={{ color: 'black' }}>hope</span> and healing. Step up today!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Link
            to="/register"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: '600',
              transition: 'background-color 0.3s ease',
            }}
          >
            Become a Donor
          </Link>
          <Link
            to="/campaign"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: '600',
              transition: 'background-color 0.3s ease',
            }}
          >
            See Campaigns
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'rgba(0, 0, 0, 0)', // Fully transparent background
        color: 'red', // Red text for emphasis
        padding: '10px 0',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1, // To ensure it stays above other content
      }}>
        <p>&copy; 2024 Life Link. All rights reserved.</p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '10px',
        }}>
          <a href="#" style={{ color: 'red', textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: 'red', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: 'red', textDecoration: 'none' }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
