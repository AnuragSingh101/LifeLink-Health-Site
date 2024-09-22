const express = require('express');
const router = express.Router();
const BloodInventory = require('../models/bloodInventory')


// get all blood records 
router.get('/', async (req, res) => {
    try {
        // const inventory = await BloodInventory.find().populate('donorId')
        // res.json(inventory) 
        res.json({message:'Inventory page '})
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
})


// // Create new blood inventory record only for admin 



// Get a single blood inventory item by ID only for admin 


// Delete a blood inventory record only for admin 

module.exports = router;