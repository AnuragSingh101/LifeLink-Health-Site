// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background: #740938;
  color: white;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 0.1em;
  }

  .nav-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .nav-item {
      margin-right: 24px;

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

  .logout-button {
    font-size: 1.125rem; /* 18px */
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #f1f1f1; /* Equivalent to Tailwind's gray-200 */
    }
  }

  .icon {
    color: #d1d5db; /* Equivalent to Tailwind's gray-300 */
    font-size: 24px; /* Adjust size as needed */
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
      <div className="brand">Life Link</div>
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
      <div>
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>LOGOUT</button>
        ) : (
          <i className="fas fa-user-circle icon"></i>
        )}
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
