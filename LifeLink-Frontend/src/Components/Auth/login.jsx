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
    console.log('Login Credentials Submitted: ', credentials);
    console.log('Form Data Submitted: ', credentials);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
      const { token, user } = response.data; // Extract 'user' instead of 'role'
      const { role } = user;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if(role === 'admin'){
        navigate('/admin-dashboard')
      }
      else{
        navigate('/user-dashboard')
      }

      console.log('Token:', token);
      console.log('Role:', role);

      console.log(response.data);
      alert('Login successful');
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
  
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
  
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
  
  
};

export default Login;
