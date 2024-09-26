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

  // Function to handle login
  const handleLogin = (token) => {
    localStorage.setItem('token', token); // Store token
    setIsLoggedIn(true); // Update state to logged in
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsLoggedIn(false); // Update state to logged out
  };

  // Profile Icon Component
  const ProfileIcon = () => (
    <img src="src\icons\profile.png" alt="Profile" style={{ width: '20px', height: '20px' }} />
  );

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/campaign">Campaign</Link></li>
      </ul>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
              <button style={{ marginRight: '10px' }}>
                <ProfileIcon />
              </button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button style={{ marginRight: '10px' }}>Login</button>
            </Link>
            <Link to="/register">
              <button>Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
