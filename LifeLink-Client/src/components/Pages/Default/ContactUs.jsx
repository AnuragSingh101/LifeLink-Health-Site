import React, { useState } from 'react';
import backgroundImage from '../../../assets/About.jpg'; // Make sure to replace with the correct image path

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset submission status
    setSubmitted(false);
    
    // Simple validation check
    if (formData.name && formData.email && formData.message) {
      // Handle form submission (e.g., send data to an API)
      console.log(formData);
      setSubmitted(true); // Show success message
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${backgroundImage})`,  // Set the background image
      backgroundSize: 'cover',  // Make sure the image covers the entire area
      backgroundPosition: 'center',  // Center the background image
      minHeight: '100vh',  // Ensure it takes the full height of the viewport
      display: 'flex',  // Use Flexbox to center the form
      justifyContent: 'center',  // Center horizontally
      alignItems: 'center',  // Center vertically
      padding: '20px',  // Add padding around the content
    }}>
      <div style={{
        padding: '30px',  // Add padding to the form
        borderRadius: '8px',  // Round the corners of the form
        width: '100%',  // Ensure the form takes full width
        maxWidth: '600px',  // Limit the maximum width
        marginLeft: '-70px',  // Move the form box 70px to the left (50px + 20px more)
      }}>
        {/* Google Font for Lobster */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" />

        <h1 style={{
          color: 'red',  // Red color for the heading
          fontSize: '3rem',  // Make the heading bigger
          textAlign: 'center',  // Center the heading
          marginBottom: '20px',  // Add space below the heading
          fontFamily: 'Lobster, cursive',  // Apply Lobster font
        }}>
          Contact Us
        </h1>
        
        {submitted && (
          <p style={{
            textAlign: 'center',
            color: 'green',
            fontWeight: 'bold',
          }}>
            Thank you for your message! We will get back to you soon.
          </p>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                border: '2px solid red',  // Red border for input field
                padding: '10px',
                width: '100%',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                border: '2px solid red',  // Red border for input field
                padding: '10px',
                width: '100%',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                border: '2px solid red',  // Red border for textarea
                padding: '10px',
                width: '100%',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
            />
          </div>

          <div>
            <button 
              type="submit"
              style={{
                backgroundColor: 'red',  // Red background color for button
                color: 'white',  // White text color for the button
                padding: '8px 16px',  // Make button smaller
                borderRadius: '3%',  // Apply 40% border radius for rounded button
                width: 'auto',  // Set width to auto to keep it small
                cursor: 'pointer',
                border: 'none',
                fontSize: '14px',  // Make font size smaller for button
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
