// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">

      {/*  */}
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/campaign">Campaign</Link></li>
      </ul>


      {/* Login and Signup buttons */}
      <div className="auth-buttons">
        <Link to="/login"><button style={{ marginRight: '10px' }}>Login</button></Link>
        <Link to="/register"><button>Signup</button></Link>
      </div>

    </nav>
  );
};

export default NavBar;