// models/BloodInventory.js
const mongoose = require('mongoose');
const bloodInventorySchema = new mongoose.Schema({
  bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  receivedDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Available', 'Reserved', 'Used', 'Expired'], default: 'Available' },
   // Reference to Donor model
   donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor', required: true }
});
const BloodInventory = mongoose.model('BloodInventory', bloodInventorySchema);
module.exports = BloodInventory;

