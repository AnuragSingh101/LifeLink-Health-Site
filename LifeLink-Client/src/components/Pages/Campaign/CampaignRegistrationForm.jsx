import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 24px;
  border-top: 1px solid #ccc;
  margin-top: 16px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #0077b6; /* Calm Blue */
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: medium;
  color: #6c757d; /* Light Gray */
`;

const FormInput = styled.input`
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  margin-top: 8px;
`;

const ReadonlyInput = styled(FormInput)`
  background-color: #f7f7f7;
  cursor: not-allowed;
`;

const SubmitButton = styled.button`
  background-color: #f94144; /* Coral Red */
  color: white;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f37272;
  }
`;

const CampaignRegistrationForm = ({ campaignId, onClose }) => {
  const [formData, setFormData] = useState({
    campaignId,
    userId: '',
    fullName: '',
    email: '',
    phone: '',
    status: 'Pending', // Default status
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('User ID not found. Please log in.');
      return;
    }

    const registrationData = {
      ...formData,
      userId,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/campign/registration/', registrationData);
      if (response.status === 200) {
        alert('You are registered successfully!');
        setFormData({
          campaignId,
          userId: '',
          fullName: '',
          email: '',
          phone: '',
          status: 'Pending',
        });
        window.location.reload();
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Register for Campaign</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="fullName">Full Name:</FormLabel>
          <FormInput
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">Phone:</FormLabel>
          <FormInput
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="status">Status:</FormLabel>
          <ReadonlyInput
            type="text"
            id="status"
            name="status"
            value={formData.status}
            readOnly
          />
        </FormGroup>
        <SubmitButton type="submit">Register</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default CampaignRegistrationForm;
