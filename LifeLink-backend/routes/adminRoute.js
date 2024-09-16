const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { getHospitalDashboard } = require('../controllers/adminController');

// Route for the hospital dashboard, only accessible by admins
router.get('/hospital-dashboard', authMiddleware, adminMiddleware, getHospitalDashboard);

module.exports = router;