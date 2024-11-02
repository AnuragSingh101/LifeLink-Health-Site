import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateInventory from './UpdateInventory';


const BloodInventoryList = () => {
  const [bloodInventory, setBloodInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    setUserRole(role);

    const fetchBloodInventory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bloodInventory');
        setBloodInventory(response.data);
      } catch (error) {
        setError('Error fetching blood inventory');
      } finally {
        setLoading(false);
      }
    };

    fetchBloodInventory();
  }, []);

  const handleAdd = () => {
    navigate('/add-blood-inventory');
  };

  const handleUpdate = (id) => {
    navigate(`/update-blood-inventory/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this entry?');
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/bloodInventory/delete/${id}`);
        setBloodInventory(bloodInventory.filter(blood => blood._id !== id));
      } catch (error) {
        console.error('Error deleting blood entry:', error);
        setError('Error deleting blood entry');
      }
    }
  };

  if (loading) return <p className="loadingMessage">Loading...</p>;
  if (error) return <p className="loadingMessage">{error}</p>;

  return (
    <div className="container">

      
      <style>{`
        .container {
          max-width: 64rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: linear-gradient(to bottom, #FFE4E6, #F3F4F6);
          min-height: 100vh;
        }
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2563EB;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .addButton {
          background-color: #2563EB;
          color: #FFFFFF;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .addButton:hover {
          background-color: #1E40AF;
        }
        .emptyMessage, .loadingMessage {
          text-align: center;
          color: #6B7280;
        }
        .inventoryList {
          list-style-type: none;
          padding: 0;
        }
        .inventoryItem {
          padding: 1.5rem;
          border: 1px solid #2563EB;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #FFFFFF;
          transition: box-shadow 0.3s;
          margin-bottom: 1.5rem;
        }
        .inventoryItem:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
        .infoTitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1D4ED8;
        }
        .itemDetails {
          display: flex;
          justify-content: space-between;
          color: #1F2937;
          margin-top: 0.5rem;
        }
        .actionButton {
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .updateButton {
          background-color: #F59E0B;
          color: #FFFFFF;
        }
        .updateButton:hover {
          background-color: #D97706;
        }
        .deleteButton {
          background-color: #EF4444;
          color: #FFFFFF;
        }
        .deleteButton:hover {
          background-color: #B91C1C;
        }
      `}</style>


      <h1 className="title">Blood Inventory List</h1>
      {userRole === 'admin' && (
        <div className="text-center mb-4">
          <button
            className="addButton"
            onClick={handleAdd}
          >
            Add Blood Entry
          </button>
        </div>
      )}
      {bloodInventory.length === 0 ? (
        <p className="emptyMessage">No blood inventory available.</p>
      ) : (
        <ul className="inventoryList">
          {bloodInventory.map((blood) => (
            <li key={blood._id} className="inventoryItem">
              <h2 className="infoTitle">Blood Information</h2>
              <div className="itemDetails">
                <p><strong>Blood Type:</strong> {blood.bloodType}</p>
                <p><strong>Quantity:</strong> {blood.quantity}G</p>
                <p><strong>Status:</strong> {blood.status}</p>
              </div>
              <div className="itemDetails">
                <p><strong>Donor Name:</strong> {blood.donorId?.name || 'N/A'}</p>
                <p><strong>Expiration Date:</strong> {new Date(blood.expirationDate).toLocaleDateString()}</p>
              </div>
              {userRole === 'admin' && (
                <div className="itemDetails">
                  <button
                    onClick={() => handleUpdate(blood._id)}
                    className="actionButton updateButton"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(blood._id)}
                    className="actionButton deleteButton"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BloodInventoryList;
