// express 
const express = require('express');
const router = express.Router();

// Authentication imports 
const { getUserDashboard, getUserInventory } = require('../controllers/userControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const { userMiddleware } = require('../middleware/userMiddleware');

router.get('/user-dashBoard', authMiddleware, userMiddleware, getUserDashboard)
router.get('/user-Inventory', authMiddleware, userMiddleware, getUserInventory)


module.exports = router