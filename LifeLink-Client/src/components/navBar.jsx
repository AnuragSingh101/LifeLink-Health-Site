import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaUserCircle } from 'react-icons/fa'; // Heart icon for the logo

const NavBarContainer = styled.nav`
  background: rgba(0, 0, 0, 0); /* Fully transparent background */
  color: red; /* Red text color to match the theme */
  padding: 20px;
  box-shadow: none; /* No box shadow for a cleaner look */
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between brand and buttons */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure the navbar is above other content */

  .brand {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: red; /* Red color for the brand name */
    
    svg {
      margin-right: 1rem;
      color: red; /* Red for the icon */
    }
  }

  .nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center; /* Center the links horizontally */
    flex-grow: 1;
  }

  .nav-item {
    margin-right: 24px;

    a {
      color: red; /* Red color for the links */
      font-size: 1.125rem;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #56cfe1; /* Light blue on hover */
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    
    .logout-button {
      display: flex;
      align-items: center;
      font-size: 1.125rem;
      color: red; /* Red color for the logout button */
      background: transparent;
      border: none;
      cursor: pointer;
      transition: color 0.3s ease;
      margin-right: 16px;

      &:hover {
        color: #56cfe1; /* Light blue on hover */
      }
    }

    .icon {
      color: red;
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

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
    <NavBarContainer>
      <div className="brand">
        <FaHeart size={32} />
        Life Link
      </div>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
        {isLoggedIn && (
          <>
            <li className="nav-item"><Link to="/inventory">Inventory</Link></li>
            <li className="nav-item"><Link to="/donors">Donors</Link></li>
            <li className="nav-item"><Link to="/campaign">Campaigns</Link></li>
          </>
        )}
        {!isLoggedIn && (
          <li className="nav-item"><Link to="/login">Login</Link></li>
        )}
      </ul>
      {isLoggedIn && (
        <div className='buttons'>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <Link to="/profile" className="logout-button">
            <FaUserCircle size={24} />
          </Link>
        </div>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
