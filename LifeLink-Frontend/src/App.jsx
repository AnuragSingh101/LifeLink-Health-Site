// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navBar';
import HomePage from './Components/Pages/homePage';
import About from './Components/Pages/About';
import Campaign from './Components/Pages/Campaign';
import Inventory from './Components/Inventory';
import Register from './Components/Auth/register';
import Login from './Components/Auth/login';
import AdminProtectedRoute from './Components/ProtectedRoutes/AdminProtectedRoute';
import UserProtectedRoute from './Components/ProtectedRoutes/UserProtectedRoute';
import AdminDashboard from './Components/DashBoard/AdminDashboard';
import UserDashboard from './Components/DashBoard/UserDashboard';

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
