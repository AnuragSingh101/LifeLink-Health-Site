import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Donors() {
    const [donors, setDonors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/donors');
                if (response.data && Array.isArray(response.data.donors)) {
                    setDonors(response.data.donors);
                } else {
                    setDonors([]);
                }
            } catch (error) {
                console.error('Error fetching donors:', error);
                setDonors([]);
            }
        };

        fetchDonors();
    }, []);

    const handleDeleteDonor = async (donorId) => {
        try {
            await axios.delete(`http://localhost:5000/api/donors/${donorId}`);
            setDonors(donors.filter(donor => donor._id !== donorId)); // Update the state to remove the donor
            alert('Donor deleted successfully');
        } catch (error) {
            console.error('Error deleting donor:', error);
            alert('Failed to delete donor');
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
                .title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #2563EB;
                    text-align: center;
                    margin-bottom: 1.5rem;
                }
                .emptyMessage {
                    text-align: center;
                    color: #6B7280;
                }
                .donorList {
                    list-style-type: none;
                    padding: 0;
                }
                .donorItem {
                    padding: 1.5rem;
                    border: 1px solid #2563EB;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    background-color: #FFFFFF;
                    transition: box-shadow 0.3s;
                    margin-bottom: 1.5rem;
                }
                .donorItem:hover {
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
                .addDonorButton, .updateButton, .deleteButton {
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 0.5rem;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s, transform 0.2s;
                    margin: 0.5rem 0;
                    margin-right: 0.5rem;
                }
                .addDonorButton {
                    background-color: #0077b6; /* Calm Blue */
                }
                .addDonorButton:hover {
                    background-color: #005f8a; /* Darker shade of Calm Blue */
                }
                .updateButton {
                    background-color: #00b4d8; /* Soft Green */
                }
                .updateButton:hover {
                    background-color: #0093b1; /* Darker shade of Soft Green */
                }
                .deleteButton {
                    background-color: #f94144; /* Coral Red */
                }
                .deleteButton:hover {
                    background-color: #c6393d; /* Darker shade of Coral Red */
                }
            `}</style>

            <h1 className="title">Donor Details</h1>
            <button className="addDonorButton" onClick={() => navigate('/addDonor')}>
                Add Donor
            </button>

            {donors.length === 0 ? (
                <p className="emptyMessage">No donors available.</p>
            ) : (
                <ul className="donorList">
                    {donors.map((donor) => (
                        <li key={donor._id} className="donorItem">
                            <h2 className="infoTitle">Donor Information</h2>
                            <div className="itemDetails">
                                <p><strong>Name:</strong> {donor.name}</p>
                                <p><strong>Age:</strong> {donor.age}</p>
                                <p><strong>Blood Type:</strong> {donor.bloodType}</p>
                            </div>
                            <div className="itemDetails">
                                <p><strong>Contact Number:</strong> {donor.contactNumber}</p>
                                <p><strong>Last Donation Date:</strong> {new Date(donor.lastDonationDate).toLocaleDateString()}</p>
                            </div>
                            <div className="itemDetails">
                                <button className="updateButton" onClick={() => navigate(`/updateDonor/${donor._id}`)}>
                                    Update
                                </button>
                                <button className="deleteButton" onClick={() => handleDeleteDonor(donor._id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
