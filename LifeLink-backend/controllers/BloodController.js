// controllers/bloodInventoryController.js

const BloodInventory = require('../models/blood');
const mongoose = require('mongoose');

// Function to add new blood inventory
exports.addBloodInventory = async (req, res) => {
  try {
    const bloodInventory = new BloodInventory(req.body);
    await bloodInventory.save();
    res.status(201).send(bloodInventory);
  } catch (error) {
    res.status(400).send({ error: 'Error adding blood inventory', details: error.message });
  }
};

// Function to get all blood inventory
exports.getAllBloodInventory = async (req, res) => {
  try {
    const bloodInventory = await BloodInventory.find();
    res.send(bloodInventory);
  } catch (error) {
    res.status(400).send({ error: 'Error fetching blood inventory', details: error.message });
  }
};

// Function to update existing blood inventory
exports.updateBloodInventory = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ error: 'Invalid ID format' });
  }
  try {
    const bloodInventory = await BloodInventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!bloodInventory) {
      return res.status(404).send({ error: 'Blood inventory not found' });
    }
    res.send(bloodInventory);
  } catch (error) {
    res.status(400).send({ error: 'Error updating blood inventory', details: error.message });
  }
};

// Function to delete blood inventory
exports.deleteBloodInventory = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ error: 'Invalid ID format' });
  }
  try {
    const bloodInventory = await BloodInventory.findByIdAndDelete(req.params.id);
    if (!bloodInventory) {
      return res.status(404).send({ error: 'Blood inventory not found' });
    }
    res.send({ message: 'Blood inventory deleted successfully' });
  } catch (error) {
    res.status(400).send({ error: 'Error deleting blood inventory', details: error.message });
  }
};
