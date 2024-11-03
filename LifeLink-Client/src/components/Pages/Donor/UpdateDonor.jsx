import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateDonor() {
    const { id } = useParams(); // Get the donor ID from the URL
    const navigate = useNavigate();
    const [donor, setDonor] = useState({ name: '', age: '', bloodType: '', contactNumber: '', lastDonationDate: '' });

    useEffect(() => {
        const fetchDonor = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/donors/${id}`);
                setDonor(response.data.donor);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.error('Donor not found:', error);
                    alert('Donor not found. Please check the ID and try again.');
                    navigate('/'); // Redirect to the donors list or handle accordingly
                } else {
                    console.error('Error fetching donor:', error);
                    alert('An error occurred while fetching donor details.');
                }
            }
        };
        

        fetchDonor();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDonor((prevDonor) => ({
            ...prevDonor,
            [name]: value,
        }));
    };

    const handleUpdateDonor = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/donors/${id}`, donor);
            alert('Donor updated successfully!');
            navigate('/donors'); // Redirect to donors list
        } catch (error) {
            console.error('Error updating donor:', error);
            alert('Failed to update donor');
        }
    };

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
                h2 {
                    text-align: center;
                    color: #2563EB;
                    margin-bottom: 1.5rem;
                }
                form {
                    background: white;
                    padding: 2rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                input {
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border: 1px solid #2563EB;
                    border-radius: 0.25rem;
                }
                input:focus {
                    outline: none;
                    border-color: #0077b6; /* Focus color */
                }
                button {
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: #0077b6; /* Calm Blue */
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s, transform 0.2s;
                    margin-top: 1rem;
                    width: 100%;
                }
                button:hover {
                    background-color: #005f8a; /* Darker shade of Calm Blue */
                }
                button:active {
                    transform: scale(0.98);
                }
            `}</style>

            <h2>Update Donor</h2>
            <form onSubmit={handleUpdateDonor}>
                <input type="text" name="name" placeholder="Name" value={donor.name} onChange={handleInputChange} required />
                <input type="number" name="age" placeholder="Age" value={donor.age} onChange={handleInputChange} required />
                <input type="text" name="bloodType" placeholder="Blood Type" value={donor.bloodType} onChange={handleInputChange} required />
                <input type="text" name="contactNumber" placeholder="Contact Number" value={donor.contactNumber} onChange={handleInputChange} required />
                <input type="date" name="lastDonationDate" value={donor.lastDonationDate} onChange={handleInputChange} required />
                <button type="submit">Update Donor</button>
            </form>
        </div>
    );
}
