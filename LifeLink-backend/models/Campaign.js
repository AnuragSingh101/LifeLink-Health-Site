const mongoose = require('mongoose');
const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Admin reference
  registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // List of users registered
});
module.exports = mongoose.model('Campaign', campaignSchema);
