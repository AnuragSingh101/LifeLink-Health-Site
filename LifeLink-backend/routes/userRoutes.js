// express 
const express = require('express');
const router = express.Router();

// Authentication imports 
const { getUserDashboard, getUserInventory } = require('../controllers/userControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const { userMiddleware } = require('../middleware/userMiddleware');


// authenticated normal users routes 
router.get('/Dashboard', authMiddleware, userMiddleware, getUserDashboard)
router.get('/Inventory', authMiddleware, userMiddleware, getUserInventory)


// export routes
module.exports = router