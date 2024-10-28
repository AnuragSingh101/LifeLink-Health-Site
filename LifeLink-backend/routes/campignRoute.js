// routes/BloodRoutes.js

const express = require('express');
const router = express.Router();
const {getCampign, postCampign, updateCampign, deleteCampign} = require('../controllers/campignController');

// POST route to add new blood inventory
router.post('/add', postCampign);

// GET route to read all blood inventory
router.get('/', getCampign);

// PUT route to update existing blood inventory
router.put('/update/:id', updateCampign);

// DELETE route to delete blood inventory
router.delete('/delete/:id', deleteCampign);

// Export the router
module.exports = router;
