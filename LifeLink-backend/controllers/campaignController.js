// controllers/campaignController.js

const Campaign = require('../models/Campaign');

// Admin creates a new campaign
exports.createCampaign = async (req, res) => {
  try {
    const { name, description, date, location } = req.body;
    const campaign = new Campaign({
      name,
      description,
      date,
      location,
      createdBy: req.user._id // The admin creating the campaign
    });
    await campaign.save();
    res.status(201).send({ message: 'Campaign created successfully', campaign });
  } catch (error) {
    res.status(400).send({ error: 'Failed to create campaign' });
  }
};

// Admin updates a campaign
exports.updateCampaign = async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCampaign) {
      return res.status(404).send({ error: 'Campaign not found' });
    }
    res.send({ message: 'Campaign updated successfully', updatedCampaign });
  } catch (error) {
    res.status(400).send({ error: 'Failed to update campaign' });
  }
};

// Admin deletes a campaign
exports.deleteCampaign = async (req, res) => {
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!deletedCampaign) {
      return res.status(404).send({ error: 'Campaign not found' });
    }
    res.send({ message: 'Campaign deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to delete campaign' });
  }
};

// Get all campaigns
exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate('registeredUsers', 'name email');
    res.send(campaigns);
  } catch (error) {
    res.status(400).send({ error: 'Failed to fetch campaigns' });
  }
};

// User registers for a campaign
exports.registerForCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).send({ error: 'Campaign not found' });
    }
    if (campaign.registeredUsers.includes(req.user._id)) {
      return res.status(400).send({ message: 'User already registered for this campaign' });
    }
    campaign.registeredUsers.push(req.user._id);  // Add user to the campaign's registeredUsers list
    await campaign.save();
    res.send({ message: 'Successfully registered for the campaign' });
  } catch (error) {
    res.status(400).send({ error: 'Failed to register for campaign' });
  }
};
