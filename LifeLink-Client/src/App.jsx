import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Auth/login'
import Register from './components/Auth/register'
import About from './components/Pages/About'
import Campaign from './components/Pages/Campaign'
import HomePage from './components/Pages/homePage'
import NavBar from './components/navBar'
import DashboardNavBar from './components/navBar/dashboardNavBar'
import Dashboard from './components/DashBoard/AdminDashboard';
import BloodInventoryList from './components/Pages/Inventory';
import Donors from './components/Pages/Donors';
import ContactUs from './components/Pages/ContactUs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/inventory' element={<BloodInventoryList/>} />
        <Route path='/donors' element={<Donors/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />




      </Routes>
    </Router>
    </>
  )
}

export default App
