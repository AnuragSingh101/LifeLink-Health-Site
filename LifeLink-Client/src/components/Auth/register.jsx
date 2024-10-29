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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Register</h2>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name Field */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition ease-in-out duration-150"
            />
          </div>

          {/* Last Name Field */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition ease-in-out duration-150"
            />
          </div>

          {/* Username Field */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition ease-in-out duration-150"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition ease-in-out duration-150"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition ease-in-out duration-150"
            />
          </div>

          {/* Role Field */}
          <div className="flex flex-col col-span-1 sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition ease-in-out duration-150"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          {/* Register Button */}
          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition ease-in-out duration-300"
            >
              Register
            </button>
          </div>
        </form>

        {/* Login Prompt */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
