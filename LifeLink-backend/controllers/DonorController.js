// donor controller


const mongoose = require('mongoose');
const Donor = require('../models/Donor')

exports.addDonor = async(req, res) => {
    try {
        const donor = new Donor(req.body)
        await donor.save()
       res.status(201).send(donor);
    } catch (error) {
        res.json({msg:"There is an error while processing your request"})
    }
}

exports.getAllDonors = async (req, res) => {
    try {
      const donors = await Donor.find();
      res.send(donors);
    } catch (error) {
      res.status(500).send({ error: 'Error fetching donors', details: error.message });
    }
  };