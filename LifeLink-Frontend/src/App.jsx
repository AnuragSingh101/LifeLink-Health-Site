// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/register';
import Login from './Components/login';
import NavBar from './Components/navBar';
import HomePage from './Components/homePage';
import Campaign from './Components/Campaign';
import Inventory from './Components/Inventory';
import About from './Components/About';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>LifeLink</h1>
        <div>
          <NavBar/>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" 
            element={
            <ProtectedRoute>
              <Inventory />
          </ProtectedRoute>
        } />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;