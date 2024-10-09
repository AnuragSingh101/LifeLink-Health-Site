// routes/userCampaignRoutes.js

const express = require('express');
const router = express.Router();
const { registerForCampaign } = require('../controllers/campaignController');
const { authMiddleware } = require('../middleware/authMiddleware');

// Register for a campaign (Users only)
router.post('/register/:id', authMiddleware, registerForCampaign);

module.exports = router;
