const mongoose = require('mongoose');

const campaignRegistrationSchema = new mongoose.Schema({
  campaignId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campaign', // Reference to the Campaign model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String, // Ensure each email is unique
  },
  phone: {
    type: String,
    required: true,
  },
  registeredAt: {
    type: Date,
    default: Date.now, // Automatically set the registration date
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'], // Possible statuses
    default: 'Pending',
  }
});

module.exports = mongoose.model('CampaignRegistration', campaignRegistrationSchema);
