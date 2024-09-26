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
    <img src="src/icons/profile.png" alt="Profile" className="w-5 h-5" />
  );

  return (
    <nav className="bg-gray-100 px-6 py-4 shadow-md flex justify-between items-center">
      {/* LifeLink Text Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/">LifeLink</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700">
        <li>
          <Link to="/" className="hover:text-gray-900">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-900">About</Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:text-gray-900">Inventory</Link>
        </li>
        <li>
          <Link to="/campaign" className="hover:text-gray-900">Campaign</Link>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded">
              <ProfileIcon />
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
