import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        setLoading(false);
      } catch (error) {
        setError('Error fetching blood inventory');
        setLoading(false);
      }
    };

    fetchBloodInventory();
  }, []);

  const handleAdd = () => {
    navigate('/add-blood-inventory');
  };

  const handleUpdate = (id) => {
    navigate(`/update-blood-inventory/${id}`); // Assuming you have a route for updating
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bloodInventory/${id}`);
      setBloodInventory(bloodInventory.filter(blood => blood._id !== id));
    } catch (error) {
      console.error('Error deleting blood entry:', error);
      setError('Error deleting blood entry');
    }
  };

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-pink-50 to-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Blood Inventory List</h1>
      {userRole === 'admin' && (
        <div className="text-center mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleAdd}
          >
            Add Blood Entry
          </button>
        </div>
      )}
      {bloodInventory.length === 0 ? (
        <p className="text-center text-gray-600">No blood inventory available.</p>
      ) : (
        <ul className="space-y-6">
          {bloodInventory.map((blood) => (
            <li key={blood._id} className="p-6 border border-blue-500 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold text-blue-700">Blood Information</h2>
              <div className="flex justify-between text-gray-800 mt-2">
                <p><strong>Blood Type:</strong> {blood.bloodType}</p>
                <p><strong>Quantity:</strong> {blood.quantity}G</p>
                <p><strong>Status:</strong> {blood.status}</p>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <p><strong>Donor Name:</strong> {blood.donorId?.name || 'N/A'}</p>
                <p><strong>Expiration Date:</strong> {new Date(blood.expirationDate).toLocaleDateString()}</p>
              </div>
              {userRole === 'admin' && (
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleUpdate(blood._id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(blood._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
