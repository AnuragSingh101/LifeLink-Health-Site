import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h1>Simple Website</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home">
        <h2>Welcome to Our Simple Website</h2>
        <p>This is a simple homepage with just text and headings.</p>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Us</h2>
        <p>We provide a range of services to help you achieve your goals. Learn more about us here.</p>
      </section>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <p>We offer web development, app development, and custom solutions tailored to your needs.</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Simple Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
