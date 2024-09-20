// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/register';
import Login from './Components/login';
import NavBar from './Components/navBar';
import HomePage from './Components/homePage';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>LifeLink</h1>
        <div>
          <NavBar/>
          <HomePage/>
        </div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
