// src/components/Login.jsx
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
      const { role } = user;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      navigate('/inventory');
      alert('Login successful');
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Registration Prompt */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            If you don't have an account,{' '}
            <a href="/register" className="text-red-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
