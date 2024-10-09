const express = require('express');
const router = express.Router();
const {addDonor, getAllDonor} = require('../controllers/DonorController')
router.post('/addDonor', addDonor);
router.get('/getAllDonor', getAllDonor);
module.exports = router