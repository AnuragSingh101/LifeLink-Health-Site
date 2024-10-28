const mongoose = require('mongoose');
const Campaign = require('../models/Campign')
const getCampign = async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.status(200).json({message: "All campigns",campaigns: campaigns});
    } catch (error) {
        res.status(500).json({message: "Error", error});
    }
}
const postCampign = async (req, res) => {
    try {
        const { title, description, startDate, endDate, location, organizer, contactInfo } = req.body;
        const campaign = new Campaign({title,description,startDate,endDate,location,organizer,contactInfo});
        const savedCampaign = await campaign.save();
        res.status(201).json({message: "Campaign created successfully",campaign: savedCampaign});
    } catch (error) {
        res.status(500).json({message: "Error creating campaign",error: error.message});
    }
}
const updateCampign = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedCampaign = await Campaign.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedCampaign) {
            return res.status(404).json({ message: "Campaign not found" });
        }
        res.status(200).json({message: "Campaign updated successfully",campaign: updatedCampaign});
    } catch (error) {
        res.status(500).json({message: "Error updating campaign",error: error.message});
    }
}
const deleteCampign = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCampaign = await Campaign.findByIdAndDelete(id);
        if (!deletedCampaign) {
            return res.status(404).json({ message: "Campaign not found" });
        }
        res.status(200).json({message: "Campaign deleted successfully",campaign: deletedCampaign});
    } catch (error) {
        res.status(500).json({message: "Error deleting campaign",error: error.message});
    }
};
module.exports = {getCampign, postCampign, updateCampign, deleteCampign}