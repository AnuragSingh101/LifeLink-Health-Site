// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-br from-blue-600 to-blue-300 text-white p-5 shadow-md flex justify-between items-center">
      <div className="text-2xl font-extrabold tracking-wider">Life Link</div>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-200 transition">ABOUT</Link></li>
        <li><Link to="/contact" className="hover:text-gray-200 transition">CONTACT US</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/inventory" className="hover:text-gray-200 transition">INVENTORY</Link></li>
            <li><Link to="/donors" className="hover:text-gray-200 transition">DONOR</Link></li>
            <li><Link to="/campaign" className="hover:text-gray-200 transition">CAMPAIGN</Link></li>
          </>
        )}
        {!isLoggedIn && (
          <li><Link to="/login" className="hover:text-gray-200 transition">LOGIN</Link></li>
        )}
      </ul>
      <div className="text-lg">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-gray-200 transition">LOGOUT</button>
        ) : (
          <i className="fas fa-user-circle text-gray-300"></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
