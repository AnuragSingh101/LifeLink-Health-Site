import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    role: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Register</h2>

        <form onSubmit={handleSubmit} className="form-grid">
          {/* First Name Field */}
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Last Name Field */}
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          {/* Role Field */}
          <div className="form-group-full">
            <label className="form-label">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Register Button */}
          <div className="form-group-full">
            <button type="submit" className="register-button">
              Register
            </button>
          </div>
        </form>

        {/* Login Prompt */}
        <div className="login-prompt">
          <p>
            Already have an account?{' '}
            <a href="/login" className="login-link">
              Login here
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          background-color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .register-form {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
        }

        .register-title {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
          color: #0077b6;
          margin-bottom: 1.5rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group, .form-group-full {
          display: flex;
          flex-direction: column;
        }

        .form-group-full {
          grid-column: span 2;
        }

        .form-label {
          color: #333333;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-input {
          padding: 0.5rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          transition: border-color 0.15s ease-in-out;
        }

        .form-input:focus {
          outline: none;
          border-color: #0077b6;
        }

        .register-button {
          width: 100%;
          background-color: #0077b6;
          color: white;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: background-color 0.3s ease-in-out;
          border: none;
        }

        .register-button:hover {
          background-color: #005f8c;
        }

        .login-prompt {
          margin-top: 1rem;
          text-align: center;
        }

        .login-link {
          color: #0077b6;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Register;
