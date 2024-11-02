import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBloodInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    expirationDate: '',
    status: '',
    donorId: ''
  });
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBloodInventory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/bloodInventory/${id}`);
        setFormData(response.data);
      } catch (error) {
        setError('Error fetching blood inventory data');
      }
    };
  
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/donors');
        setDonors(response.data);
      } catch (error) {
        setError('Error fetching donors');
      }
    };
  
    fetchBloodInventory();
    fetchDonors();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/bloodInventory/update/${id}`, formData);
      navigate('/inventory');
    } catch (error) {
      setError('Error updating blood inventory');
    }
  };

  return (
    <div className="update-inventory">
      <h2>Update Blood Inventory</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Blood Type:
          <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </label>

        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate.slice(0, 10)}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="Used">Used</option>
            <option value="Expired">Expired</option>
          </select>
        </label>

        <label>
          Donor:
          <select name="donorId" value={formData.donorId} onChange={handleChange} required>
            <option value="">Select Donor</option>
            {donors.map((donor) => (
              <option key={donor._id} value={donor._id}>
                {donor.name} - {donor.bloodType}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Update Inventory</button>
      </form>
    </div>
  );
};

export default UpdateBloodInventory;
