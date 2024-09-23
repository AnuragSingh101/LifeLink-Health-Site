const mongoose = require('mongoose');

const bloodInventorySchema = new mongoose.Schema({
  bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  // donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor', required: true },
  receivedDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Available', 'Reserved', 'Used', 'Expired'], default: 'Available' }
});

const BloodInventory = mongoose.model('BloodInventory', bloodInventorySchema);
module.exports = BloodInventory;
