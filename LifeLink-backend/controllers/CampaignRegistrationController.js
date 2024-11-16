const CampaignRegistration = require('../models/CampaignRegistration'); 

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

const getRegistrationsByCampaignId = async (req, res) => {
  const { campaignId } = req.params;

  try {
    // Find registrations matching the provided campaignId
    const registrations = await CampaignRegistration.find({ campaignId })
      .populate('userId', 'fullName email phone') 
      .exec();

    if (!registrations.length) {
      return res.status(404).json({ message: 'No registrations found for this campaign.' });
    }

    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching registrations.' });
  }
};

// Get all registrations
const getAllRegistrations= async (req, res) => {
  const { email, campaignId } = req.body;

  // Check if a registration already exists for this email and campaign
  const existingRegistration = await CampaignRegistration.findOne({ email, campaignId });
  
  if (existingRegistration) {
    return res.status(400).json({ message: 'You are already registered for this campaign.' });
  }

  // Proceed to create a new registration
  const newRegistration = new CampaignRegistration(req.body);
  await newRegistration.save();
  res.status(200).json({ message: 'Registration successful.' });
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
      { new: true, runValidators: true }
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

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const approveDonor = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
  getRegistrationsByCampaignId
};
