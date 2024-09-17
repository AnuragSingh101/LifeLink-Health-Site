const mongoose = require('mongoose')
const User = require("../models/user");


// Controller function to handle user dashboard
const getUserDashboard = (req, res) => {
   const { firstName, lastName } = req.user; // Access firstName and lastName from the JWT
   res.send(`Welcome to the user dashboard, ${firstName} ${lastName} !`);
};

const getUserInventory = (req, res) => {
   res.send('Welcome to the user Inventory!');

}


module.exports = { getUserDashboard, getUserInventory };
