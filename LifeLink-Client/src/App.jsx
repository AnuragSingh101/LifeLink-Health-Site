import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import About from './components/Pages/Default/About';
// import Campaign from './components/Pages/Campaign/';
import HomePage from './components/Pages/Default/homePage';
import NavBar from './components/navBar';
// import DashboardNavBar from './components/navBar/dashboardNavBar';
// import Dashboard from './components/DashBoard/AdminDashboard';
import BloodInventoryList from './components/Pages/Inventory/Inventory';
import Donors from './components/Pages/Donor/Donors';
import ContactUs from './components/Pages/Default/ContactUs';
import CampaignsPage from './components/Pages/Campaign/Campaign';
import CampaignRegistrationForm from './components/Pages/Campaign/CampaignRegistrationForm';
// import Home from './components/Pages/Try';
import AddBloodInventory from './components/Pages/Inventory/AddBloodInventoryModal';
import UpdateBloodInventory from './components/Pages/Inventory/UpdateInventory';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/inventory' element={<BloodInventoryList />} />
          <Route path='/donors' element={<Donors />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/campaign' element={<CampaignsPage />} />
          <Route path="/add-blood-inventory" element={<AddBloodInventory />} />
          <Route path="/update-blood-inventory/:id" element={<UpdateBloodInventory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
