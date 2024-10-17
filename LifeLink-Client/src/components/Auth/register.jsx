// src/components/Register.jsx
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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* First Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Username:</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Role Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Login Prompt */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-red-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
