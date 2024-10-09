// routes/BloodRoutes.js

const express = require('express');
const router = express.Router();
const {
  addBloodInventory,
  getAllBloodInventory,
  updateBloodInventory,
  deleteBloodInventory
} = require('../controllers/BloodController');

// POST route to add new blood inventory
router.post('/add', addBloodInventory);

// GET route to read all blood inventory
router.get('/', getAllBloodInventory);

// PUT route to update existing blood inventory
router.put('/update/:id', updateBloodInventory);

// DELETE route to delete blood inventory
router.delete('/delete/:id', deleteBloodInventory);

// Export the router
module.exports = router;
