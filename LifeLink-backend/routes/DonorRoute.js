// Donor router 

const express = require('express');
const router = express.Router();

const {addDonor, getAllDonors} = require('../controllers/DonorController')

router.post('/addDonor', addDonor);


router.get('/', getAllDonors);

module.exports = router