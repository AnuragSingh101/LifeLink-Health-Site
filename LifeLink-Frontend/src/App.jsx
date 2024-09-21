// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Campaign from './Components/Campaign';
import Inventory from './Components/Inventory';
import Register from './Components/Register';
import Login from './Components/Login';
import AdminProtectedRoute from './Components/AdminProtectedRoute';
import UserProtectedRoute from './Components/UserProtectedRoute';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>LifeLink</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          } />
          <Route path="/user-dashboard" element={
            <UserProtectedRoute>
              <UserDashboard />
            </UserProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
