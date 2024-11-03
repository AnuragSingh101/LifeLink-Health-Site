// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa'; // Heart icon for the logo
import { FaUserCircle } from 'react-icons/fa'; // Profile icon

const NavBarContainer = styled.nav`
  background: #740938;
  color: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Space between brand and right section */
  
  .brand {
    display: flex; /* Use flex to align the icon and text */
    align-items: left; /* Center items vertically */
    font-family: 'Roboto', sans-serif; /* Use the imported font */
    font-size: 20px; /* Adjusted size */
    font-weight: 800; /* Bold weight */
    letter-spacing: 0.1em;

    svg {
      margin-right: 2rem; /* Space between icon and text */
      color: #f1c40f; /* Gold color for the icon */
    }
  }

  .nav-list {
    display: flex;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items vertically */
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1; /* Allow nav-list to take available space */

    .nav-item {
      margin-right: 24px; /* Space between nav items */

      a {
        color: white;
        font-size: 1.125rem; /* 18px */
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #f1f1f1; /* Equivalent to Tailwind's gray-200 */
        }
      }
    }
  }

  .buttons {
    display: flex; /* Use flex to align buttons side by side */
    align-items: center; /* Center buttons vertically */
    
    .logout-button {
      display: flex; /* Use flex to align the text */
      align-items: center; /* Center items vertically */
      font-size: 1.125rem; /* 18px */
      color: white;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: color 0.3s ease;
      margin-right: 16px; /* Space between the logout button and profile icon */

      &:hover {
        color: #f1f1f1; /* Equivalent to Tailwind's gray-200 */
      }
    }

    .icon {
      color: #d1d5db; /* Equivalent to Tailwind's gray-300 */
      font-size: 24px; /* Adjust size as needed */
      cursor: pointer; /* Pointer cursor to indicate it's clickable */
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
        <FaHeart size={32} /> {/* Heart icon for the logo */}
        Life Link
      </div>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">ABOUT</Link></li>
        <li className="nav-item"><Link to="/contact">CONTACT US</Link></li>
        {isLoggedIn && (
          <>
            <li className="nav-item"><Link to="/inventory">INVENTORY</Link></li>
            <li className="nav-item"><Link to="/donors">DONOR</Link></li>
            <li className="nav-item"><Link to="/campaign">CAMPAIGN</Link></li>
          </>
        )}
        {!isLoggedIn && (
          <li className="nav-item"><Link to="/login">LOGIN</Link></li>
        )}
      </ul>
      {isLoggedIn && (
        <div className='buttons'>
          <button className="logout-button" onClick={handleLogout}>
            LOGOUT
          </button>
          <Link to="/profile" className="logout-button">
            <FaUserCircle size={24} /> {/* Profile icon */}
          </Link>
        </div>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
