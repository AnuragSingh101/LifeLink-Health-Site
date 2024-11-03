const mongoose = require('mongoose');
const Donor = require('../models/Donor');

exports.addDonor = async (req, res) => {
    try {
        const donor = new Donor(req.body);
        await donor.save();
        res.status(201).json({ success: true, donor });
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ success: false, msg: error.message });
        } else {
            res.status(500).json({ success: false, msg: "There is an error while processing your request" });
        }
    }
}

exports.getAllDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.json({ success: true, donors });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error fetching donors', details: error.message });
    }
};

// New function to fetch a donor by ID
exports.getDonorById = async (req, res) => {
    const { id } = req.params; // Get donor ID from request parameters
    try {
        const donor = await Donor.findById(id);
        if (!donor) {
            return res.status(404).json({ success: false, msg: "Donor not found" });
        }
        res.json({ success: true, donor });
    } catch (error) {
        res.status(500).json({ success: false, msg: "Error fetching donor", details: error.message });
    }
};

exports.updateDonor = async (req, res) => {
    const { id } = req.params; // Get donor ID from request parameters
    try {
        const updatedDonor = await Donor.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedDonor) {
            return res.status(404).json({ success: false, msg: "Donor not found" });
        }
        res.json({ success: true, donor: updatedDonor });
    } catch (error) {
        res.status(500).json({ success: false, msg: "Error updating donor", details: error.message });
    }
};

exports.deleteDonor = async (req, res) => {
    const { id } = req.params; // Get donor ID from request parameters
    try {
        const deletedDonor = await Donor.findByIdAndDelete(id);
        if (!deletedDonor) {
            return res.status(404).json({ success: false, msg: "Donor not found" });
        }
        res.json({ success: true, msg: "Donor deleted successfully", donor: deletedDonor });
    } catch (error) {
        res.status(500).json({ success: false, msg: "Error deleting donor", details: error.message });
    }
};
