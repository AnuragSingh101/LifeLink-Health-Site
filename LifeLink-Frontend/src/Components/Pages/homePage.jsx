// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage" style={styles.homepage}>
      <header className="homepage-header" style={styles.header}>
        <h1>Welcome to LifeLink</h1>
        <p>Your platform for efficient blood donation management.</p>
        <nav>
          <Link to="#about" style={styles.navLink}>About Us</Link>
          <Link to="#inventory" style={styles.navLink}>Inventory</Link>
          <Link to="#campaign" style={styles.navLink}>Campaign</Link>
        </nav>
      </header>
      
      <section id="home" style={styles.fullPageSection}>
        <h2>Home Section</h2>
        <p>Life Link (LL) is designed to streamline the blood donation process, ensuring that hospitals can quickly access the necessary information about blood types and available quantities.</p>
        <p>Our user-friendly interface allows healthcare providers to easily navigate the system, making it simpler to request and manage blood supplies as needed.</p>
        <p>We prioritize efficiency and responsiveness to ensure that every patient receives the care they need in a timely manner.</p>
      </section>
      
      <section id="about" style={styles.fullPageSection}>
        <h2>About Us</h2>
        <p>At Life Link, we focus on improving the efficiency of blood banks by providing real-time data on blood donations and inventory management.</p>
        <p>Our mission is to ensure that every hospital has the resources to deliver safe blood to those in need.</p>
        <p>We believe that a well-managed blood donation system can save lives, and our platform is dedicated to supporting healthcare providers in this crucial mission.</p>
      </section>

      <section id="inventory" style={styles.fullPageSection}>
        <h2>Inventory</h2>
        <p>Explore our inventory management system, which tracks the availability of different blood types, ensuring that blood banks can respond swiftly to hospitals' requests.</p>
        <p>Our system maintains detailed records of blood donations, including donor information, testing results, and expiration dates for each unit of blood.</p>
        <p>This transparency allows hospitals to manage their resources effectively and ensures that only safe, tested blood is used for transfusions.</p>
      </section>

      <section id="campaign" style={styles.fullPageSection}>
        <h2>Campaign</h2>
        <p>Join our blood donation campaigns and make a difference in your community. Life Link helps hospitals organize and promote donation drives to gather essential blood supplies.</p>
        <p>Our platform provides tools for tracking participation and contributions, enhancing the overall success of these initiatives.</p>
        <p>By engaging with local communities and leveraging social media, we aim to raise awareness about the importance of blood donation and encourage more people to contribute.</p>
      </section>
      
      <footer className="homepage-footer" style={styles.footer}>
        <p>&copy; 2024 LifeLink. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Inline styles
const styles = {
  homepage: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#4CAF50', // Green background
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  navLink: {
    margin: '0 15px',
    color: 'white',
    textDecoration: 'none',
  },
  fullPageSection: {
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    margin: '0',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
};

export default HomePage;
