import React from 'react';
import backgroundImage from '../../../assets/aa.png'; // Adjust the relative path if needed

const About = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover',  
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', 
      display: 'flex',  
      justifyContent: 'flex-start',  
      alignItems: 'center',  
      padding: '20px',  
    }}>
      <div style={{
        textAlign: 'left',  
        color: 'red',  
        padding: '20px',
        borderRadius: '10px',  
        maxWidth: '600px',  
        width: '100%',
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontFamily: "'Lobster', cursive"  // Apply Lobster font only to the heading
        }}>
          About Life Link
        </h1>
        <p style={{ fontSize: '24px' }}>
          <span>Life Link</span> is a web platform that simplifies blood donation and inventory management, ensuring hospitals have quick access to safe blood. Our mission is to improve the efficiency of blood banks and save lives by connecting donors, blood banks, and hospitals seamlessly.
        </p>
      </div>
    </div>
  );
};

export default About;
