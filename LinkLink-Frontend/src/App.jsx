// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Components/register';
import Login from './Components/login';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Auth App</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
