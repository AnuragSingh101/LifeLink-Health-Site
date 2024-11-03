import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHeartbeat, FaUsers, FaRegStar, FaRegHeart, FaHandsHelping, FaDonate } from 'react-icons/fa';

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

    incrementStats("bloodUnits", 1200, 15);
    incrementStats("donors", 5000, 10);
    incrementStats("campaigns", 8, 50);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <h1 className="hero-title">Join the Lifesaving Movement</h1>
        <p className="hero-subtitle">
          Your contribution can bring hope and healing. Step up today!
        </p>
        <div className="hero-buttons">
          <Link to="/register" className="hero-button white-button">Become a Donor</Link>
          <Link to="/campaign" className="hero-button blue-button">See Campaigns</Link>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="about-section">
        <h2 className="section-title">About Life Link</h2>
        <p className="section-text">
          Life Link is on a mission to bridge the gap between blood donors and recipients. Join us in making blood donation accessible and life-saving for those who need it most.
        </p>
      </section> */}

      {/* Campaign Spotlight */}
      {/* <section className="spotlight-section">
        <h2 className="section-title">Featured Campaign</h2>
        <div className="campaign-card">
          <img src="/path-to-campaign-image.jpg" alt="Campaign" className="campaign-image" />
          <div className="campaign-info">
            <h3 className="campaign-title">Community Blood Drive</h3>
            <p className="campaign-description">Join us at the City Center for our community blood drive and make a difference.</p>
            <p className="campaign-details">Date: Nov 15, 2024</p>
            <p className="campaign-details">Location: City Center Hall</p>
            <Link to="/campaigns/1" className="campaign-link">Join Now</Link>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      {/* <section className="how-it-works-section">
        <h3 className="section-title">How It Works</h3>
        <div className="how-it-works-steps">
          <div className="step">
            <FaRegHeart className="step-icon" />
            <h4 className="step-title">Register</h4>
            <p className="step-text">Sign up as a donor or campaign supporter.</p>
          </div>
          <div className="step">
            <FaHandsHelping className="step-icon" />
            <h4 className="step-title">Find a Campaign</h4>
            <p className="step-text">Browse and join nearby blood donation events.</p>
          </div>
          <div className="step">
            <FaDonate className="step-icon" />
            <h4 className="step-title">Donate</h4>
            <p className="step-text">Arrive on the scheduled date and donate safely.</p>
          </div>
        </div>
      </section> */}

      {/* Upcoming Campaigns Section */}
      {/* <section className="upcoming-campaigns-section">
        <h2 className="section-title">Upcoming Campaigns</h2>
        <div className="campaigns">
          <div className="campaign-card">
            <img src="/path-to-upcoming-campaign-image.jpg" alt="Upcoming Campaign" className="campaign-image" />
            <div className="campaign-info">
              <h3 className="campaign-title">Annual Blood Donation Drive</h3>
              <p className="campaign-description">Help us reach our goal this year to collect 500 units of blood!</p>
              <p className="campaign-details">Date: Dec 10, 2024</p>
              <p className="campaign-details">Location: Community Hall</p>
              <Link to="/campaigns/2" className="campaign-link">Join Now</Link>
            </div>
          </div>
          <div className="campaign-card">
            <img src="/path-to-upcoming-campaign-image.jpg" alt="Upcoming Campaign" className="campaign-image" />
            <div className="campaign-info">
              <h3 className="campaign-title">Special Holiday Blood Drive</h3>
              <p className="campaign-description">Join us in giving the gift of life this holiday season.</p>
              <p className="campaign-details">Date: Dec 25, 2024</p>
              <p className="campaign-details">Location: Central Park</p>
              <Link to="/campaigns/3" className="campaign-link">Join Now</Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Life Link. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>

      <style jsx>{`
        .home-container {
          background-color: #f3f4f6;
          color: #1a202c;
        }

        /* Hero Section */
        .hero-section {
          height: 76.3vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
          background: linear-gradient(to bottom right, #FEF9F2, #FBFBFB);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          z-index: 1;
        }
        .hero-subtitle {
          margin-top: 1rem;
          font-size: 1.25rem;
          color: #f1f1f1;
          max-width: 40rem;
          z-index: 1;
        }
        .hero-buttons {
          margin-top: 2rem;
          z-index: 1;
        }
        .hero-button {
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          border-radius: 9999px;
          text-transform: uppercase;
          transition: background-color 0.3s;
        }
        .white-button {
          background-color: #ffffff;
          color: #0077b6;
        }
        .blue-button {
          background-color: #005f99;
          color: #ffffff;
        }

        /* Other Sections */
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0077b6;
          margin-bottom: 1rem;
        }
        .section-text {
          font-size: 1.125rem;
          color: #4a5568;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Campaign Cards */
        .campaign-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        .campaign-image {
          width: 100%;
          height: 16rem;
          object-fit: cover;
        }
        .campaign-info {
          padding: 1.5rem;
        }
        .campaign-link {
          display: inline-block;
          background-color: #0077b6;
          color: #ffffff;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          margin-top: 1rem;
          font-weight: 600;
          transition: background-color 0.3s;
        }

        /* Footer */
        .footer {
          background-color: #1a202c;
          color: #e2e8f0;
          padding: 2rem;
          text-align: center;
        }
        .footer-links a {
          color: #00b4d8;
          margin: 0 1rem;
          transition: color 0.3s;
        }
      `}</style>

    </div>
  );
};

export default HomePage;
