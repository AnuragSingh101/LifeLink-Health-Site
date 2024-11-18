import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      const { token, user } = response.data;
      const userId = user.id;
      const { role } = user;

      // Store the token and user ID in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('role', role);
      navigate('/inventory');
      window.location.reload();
      alert('Login successful');
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="form-fields">
          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Registration Prompt */}
        <div className="registration-prompt">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="registration-link">
              Register
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif; /* Healthcare-inspired clean font */
        }

        .login-container {
          min-height: 100vh;
          background-color: #e0f7fa; /* Light Blue - Healthcare color */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-form {
          background-color: #ffffff; /* White for a clean, professional look */
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          color: #0077b6; /* Calming Blue */
          margin-bottom: 1.5rem;
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-label {
          display: block;
          color: #333333; /* Dark Gray for text */
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db; /* Light Gray border */
          border-radius: 0.375rem;
          transition: border-color 0.15s ease-in-out;
        }

        .form-input:focus {
          outline: none;
          border-color: #0077b6; /* Calming Blue border on focus */
        }

        .login-button {
          width: 100%;
          background-color: #0077b6; /* Calm Blue */
          color: white;
          font-weight: 600;
          padding: 0.75rem;
          border-radius: 0.375rem;
          transition: background-color 0.3s ease-in-out;
          border: none;
        }

        .login-button:hover {
          background-color: #005f8c; /* Darker Blue on hover */
        }

        .registration-prompt {
          margin-top: 1rem;
          text-align: center;
        }

        .registration-link {
          color: #0077b6; /* Calm Blue */
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;
