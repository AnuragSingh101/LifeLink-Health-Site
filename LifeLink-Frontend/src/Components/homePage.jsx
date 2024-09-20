// src/components/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="home">
        <h2>Welcome to MyApp</h2>
        <p>This is the home section where you introduce your application.</p>
      </section>
      
      <section id="about">
        <h2>About Us</h2>
        <p>Learn more about what we do and our mission.</p>
      </section>

      <section id="inventory">
        <h2>Inventory</h2>
        <p>Explore our inventory and find what you're looking for.</p>
      </section>

      <section id="campaign">
        <h2>Campaign</h2>
        <p>Join our latest campaign and help make a difference.</p>
      </section>
    </div>
  );
};

export default HomePage;
