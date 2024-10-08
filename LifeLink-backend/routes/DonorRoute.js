// Donor router 

const express = require('express');
const router = express.Router();

const {addDonor} = require('../controllers/DonorController')

router.post('/addDonor', addDonor);


module.exports = router