// src/components/NavBar.jsx
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://via.placeholder.com/50" alt="Logo" />
        <h1>MyApp</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#inventory">Inventory</a></li>
        <li><a href="#campaign">Campaign</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;