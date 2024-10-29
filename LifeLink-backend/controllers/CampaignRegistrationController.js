const CampaignRegistration = require('../models/CampaignRegistration'); // Adjust the path as necessary

// Create a new registration
const createRegistration = async (req, res) => {
  try {
    const newRegistration = new CampaignRegistration(req.body);
    const savedRegistration = await newRegistration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all registrations
const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await CampaignRegistration.find()
      .populate('campaignId', 'title') // Populating campaign details
      .populate('userId', 'fullName email'); // Populating user details
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

    res.status(204).json(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
