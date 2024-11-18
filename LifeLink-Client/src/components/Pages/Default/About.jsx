import React from 'react';
import backgroundImage from '../../../assets/image1.jpeg'; // Adjust the relative path if needed

const About = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`, // Using the imported image
      backgroundSize: '40%',  // Increases the background image width
      backgroundPosition: 'center',  // Centers the background image
      backgroundRepeat: 'no-repeat',  // Ensures the background image doesn't repeat
      minHeight: '100vh',
      padding: '200px',
    }}>
      <div>
        <h1>About Life Link</h1>
        <p>
          <span>Life Link</span> is a web platform that simplifies blood donation and inventory management, ensuring hospitals have quick access to safe blood. Our mission is to improve the efficiency of blood banks and save lives by connecting donors, blood banks, and hospitals seamlessly.
        </p>
      </div>
    </div>
  );
};

export default About;
