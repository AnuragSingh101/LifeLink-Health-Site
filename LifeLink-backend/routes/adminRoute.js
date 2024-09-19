// imported express 
const express = require('express');
const router = express.Router();

// Imported authantication middleware to identify loged in user 
const { authMiddleware } = require('../middleware/authMiddleware');

// Imported authantication middleware to identify loged in user is admin 
const {adminMiddleware} = require('../middleware/adminMiddleware')

// after checking authantication user detail admin routes are served 
const { getHospitalDashboard, getAdminInventory } = require('../controllers/adminController');

// Route for the hospital dashboard, only accessible by admins
router.get('/hospitalDashboard', authMiddleware, adminMiddleware, getHospitalDashboard);

// Route for the inventory with admin features for the admin users only 
router.get('/adminInventory', authMiddleware, adminMiddleware, getAdminInventory);

// exported this routes to use it in main server files 
module.exports = router;