// routes/campaignRoutes.js
const express = require('express');
const router = express.Router();
const { createCampaign, updateCampaign, deleteCampaign, getAllCampaigns } = require('../controllers/campaignController');
const { adminMiddleware } = require('../middleware/adminMiddleware');
const authMiddleware = require('../middleware/authMiddleware')
// Create a new campaign (Admin only)
router.post('/create', authMiddleware, adminMiddleware, createCampaign);
// Update an existing campaign (Admin only)
router.put('/update/:id', authMiddleware, adminMiddleware, updateCampaign);
// Delete a campaign (Admin only)
router.delete('/delete/:id',authMiddleware, adminMiddleware, deleteCampaign);
// Get all campaigns
router.get('/', getAllCampaigns);
module.exports = router;
