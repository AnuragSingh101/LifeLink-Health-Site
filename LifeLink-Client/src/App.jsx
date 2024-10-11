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
      </Routes>
    </Router>
    </>
  )
}

export default App
