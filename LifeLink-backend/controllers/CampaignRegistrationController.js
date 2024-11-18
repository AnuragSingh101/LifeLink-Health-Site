const CampaignRegistration = require('../models/CampaignRegistration'); // Adjust the path as necessary

// Create a new registration for a campaign
const registerForCampaign = async (req, res) => {
  const { email, campaignId } = req.body;

  try {
    // Validate required fields
    if (!email || !campaignId) {
      return res.status(400).json({ message: 'Email and campaignId are required.' });
    }

    // Check if a registration already exists for this email and campaign
    const existingRegistration = await CampaignRegistration.findOne({ email, campaignId });

    if (existingRegistration) {
      return res.status(409).json({ message: 'You are already registered for this campaign.' });
    }

    // Proceed to create a new registration
    const newRegistration = new CampaignRegistration(req.body);
    const savedRegistration = await newRegistration.save();
    res.status(201).json({ message: 'Registration successful.', savedRegistration });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all registrations
const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await CampaignRegistration.find()
      .populate('campaignId', 'title')
      .populate('userId', 'fullName email');
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get registrations by campaign ID
const getRegistrationsByCampaignId = async (req, res) => {
  const { campaignId } = req.params; // Get campaignId from request parameters

  try {
    // Find registrations matching the provided campaignId
    const registrations = await CampaignRegistration.find({ campaignId })
      .populate('userId', 'fullName email phone'); // Optionally populate user data

    if (!registrations.length) {
      return res.status(404).json({ message: 'No registrations found for this campaign.' });
    }

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a registration by ID
const getRegistrationById = async (req, res) => {
  try {
    const registration = await CampaignRegistration.findById(req.params.id)
      .populate('campaignId', 'title')
      .populate('userId', 'fullName email');

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json(registration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a registration
const updateRegistration = async (req, res) => {
  try {
    const updatedRegistration = await CampaignRegistration.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedRegistration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json(updatedRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a registration
const deleteRegistration = async (req, res) => {
  try {
    const deletedRegistration = await CampaignRegistration.findByIdAndDelete(req.params.id);

    if (!deletedRegistration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerForCampaign,
  getAllRegistrations,
  getRegistrationsByCampaignId,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
