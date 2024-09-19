
// Controller function to handle user dashboard
const getUserDashboard = (req, res) => {
   const { firstName, lastName } = req.user; // Access firstName and lastName from the JWT
   res.send(`Welcome to the user dashboard, ${firstName} ${lastName} !`);
};
// Controller function to handle inventory but have a limited function only 
const getUserInventory = (req, res) => {
   res.send('Welcome to the user Inventory!');

}

// exported these controller function to use them in the user router file 
module.exports = { getUserDashboard, getUserInventory };
