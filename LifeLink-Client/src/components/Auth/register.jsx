// src/components/Register.jsx
// uncomment useNavigate and navigate before linking each page 
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// braking down all details in formData
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    role: ''
  });

  // calling all useNavigate function to the navigate variavble 
  // const navigate = useNavigate();
  
  // function to handle changes in the form  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // function to handle submit button click event 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    try {
      // sending responce to the /api/auth/register backend to database
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      alert('Registration successful');

      // directing user to login page after registeration is successfull
      // navigate('/login');

      
    } catch (error) {
      console.error('There was an error registering the user!', error);
    }
  };

    // main registration page UI html 
  return (
    <div>

      <h2>Register</h2>
      {/* form to get user details  */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;