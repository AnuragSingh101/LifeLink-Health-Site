const mongoose = require('mongoose');
const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: true },
  contactNumber: { type: String, required: true },
  lastDonationDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Donor', donorSchema);