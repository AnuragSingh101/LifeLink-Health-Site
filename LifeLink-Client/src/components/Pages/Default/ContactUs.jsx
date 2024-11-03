// src/components/ContactUs.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, #ebf8ff, #dbeafe, #f9fafb); /* Tailwind's gradient */
  padding: 1rem;

  .form-container {
    max-width: 640px; /* Equivalent to max-w-2xl */
    width: 100%;
    padding: 1.5rem; /* Tailwind's p-6 */
    background: white;
    border-radius: 0.5rem; /* Tailwind's rounded-lg */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Tailwind's shadow-md */
  }

  .title {
    font-size: 1.875rem; /* Tailwind's text-3xl */
    font-weight: 700; /* Tailwind's font-bold */
    color: #0077b6; /* Tailwind's text-blue-600 */
    text-align: center;
    margin-bottom: 1.5rem; /* Tailwind's mb-6 */
  }

  .success-message {
    text-align: center;
    color: #22c55e; /* Tailwind's text-green-600 */
    font-weight: 600; /* Tailwind's font-semibold */
    margin-bottom: 1rem; /* Tailwind's mb-4 */
  }

  .form-group {
    margin-bottom: 1rem; /* Tailwind's space-y-4 */
  }

  label {
    display: block;
    font-size: 0.875rem; /* Tailwind's text-sm */
    font-weight: 500; /* Tailwind's font-medium */
    color: #4b5563; /* Tailwind's text-gray-700 */
  }

  input, textarea {
    margin-top: 0.25rem; /* Tailwind's mt-1 */
    width: 100%;
    padding: 0.75rem; /* Tailwind's p-3 */
    border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */
    border-radius: 0.375rem; /* Tailwind's rounded-md */
    outline: none;

    &:focus {
      ring: 2px solid #3b82f6; /* Tailwind's focus:ring-2 focus:ring-blue-500 */
    }
  }

  button {
    width: 100%;
    background-color: #0077b6; /* Tailwind's bg-blue-600 */
    color: white;
    font-weight: 600; /* Tailwind's font-semibold */
    padding: 0.5rem; /* Tailwind's py-2 */
    border-radius: 0.375rem; /* Tailwind's rounded-md */
    transition: background-color 0.3s;

    &:hover {
      background-color: #005f8c; /* Tailwind's hover:bg-blue-700 */
    }

    &:focus {
      outline: none;
      ring: 2px solid #3b82f6; /* Tailwind's focus:ring-2 focus:ring-blue-500 */
    }
  }
`;

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
    <ContactContainer>
      <div className="form-container">
        <h1 className="title">Contact Us</h1>
        
        {submitted && (
          <p className="success-message">
            Thank you for your message! We will get back to you soon.
          </p>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </ContactContainer>
  );
};

export default ContactUs;
