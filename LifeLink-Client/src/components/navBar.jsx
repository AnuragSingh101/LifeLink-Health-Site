import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  // State to check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

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
    navigate('/'); // Redirect to the home page
  };

  // Profile Icon Component
  const ProfileIcon = () => (
    <img src="src/icons/profile.png" alt="Profile" />
  );

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">LOGO</div>
      <ul className="flex space-x-8">
        {isLoggedIn ? (
          <>
            <li><Link to="/about" className="text-black hover:text-gray-600">ABOUT</Link></li>
            <li><Link to="/contact" className="text-black hover:text-gray-600">CONTACT US</Link></li>
            <li><Link to="/inventory" className="text-black hover:text-gray-600">INVENTORY</Link></li>
            <li><Link to="/donors" className="text-black hover:text-gray-600">DONOR</Link></li>
            <li><Link to="/campaign" className="text-black hover:text-gray-600">CAMPAIGN</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="text-black hover:text-gray-600">LOGIN</Link></li>
            <li><Link to="/register" className="text-black hover:text-gray-600">REGISTER</Link></li>
          </>
        )}
      </ul>
      <div className="text-xl">
        {isLoggedIn ? (
          <div>
            <ProfileIcon />
            <button onClick={handleLogout} className="text-black hover:text-gray-600 ml-4">LOGOUT</button>
          </div>
        ) : (
          <i className="fas fa-user-circle text-purple-400"></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
