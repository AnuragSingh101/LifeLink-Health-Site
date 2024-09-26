// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // State to check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check for token and listen for login/logout events
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Event listener to update state on login/logout
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    // Attach the event listener
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsLoggedIn(false); // Update state to logged out
  };

  // Profile Icon Component
  const ProfileIcon = () => (
    <img src="src/icons/profile.png" alt="Profile" style={{ width: '20px', height: '20px' }} />
  );

  return (
    <nav className="navbar" style={styles.navbar}>
      <ul className="nav-links" style={styles.navLinks}>
        <li><Link to='/' style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/inventory" style={styles.link}>Inventory</Link></li>
        <li><Link to="/campaign" style={styles.link}>Campaign</Link></li>
      </ul>

      <div className="auth-buttons" style={styles.authButtons}>
        {isLoggedIn ? (
          <>
            <button style={styles.profileButton}>
              <ProfileIcon />
            </button>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button style={styles.button}>Login</button>
            </Link>
            <Link to="/register">
              <button style={styles.button}>Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4CAF50', // Green background
    color: 'white',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginRight: '20px',
  },
  authButtons: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginLeft: '10px',
    padding: '5px 10px',
    backgroundColor: '#fff',
    color: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  profileButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

export default NavBar;
