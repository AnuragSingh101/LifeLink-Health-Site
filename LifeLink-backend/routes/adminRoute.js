const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { getHospitalDashboard, getAdminInventory } = require('../controllers/adminController');

// Route for the hospital dashboard, only accessible by admins
router.get('/hospitalDashboard', authMiddleware, adminMiddleware, getHospitalDashboard);
router.get('/adminInventory', authMiddleware, adminMiddleware, getAdminInventory);


module.exports = router;