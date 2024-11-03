// Donor router 
const express = require('express');
const router = express.Router();
const {addDonor, getAllDonors,updateDonor, deleteDonor, getDonorById}  = require('../controllers/DonorController')

router.get('/', getAllDonors);
router.post('/addDonor', addDonor);
router.put('/:id', updateDonor);
router.delete('/:id', deleteDonor);
router.get('/:id', getDonorById);

module.exports = router

// http://localhost:5000/api/donors/:id