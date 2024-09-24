// Controller function to handle the hospital dashboard
const getHospitalDashboard = (req, res) => {
    res.send('Welcome to the hospital dashboard!');
};


// created a function to provide a access only to for the Admin user 
const getAdminInventory = (req, res) => {
    res.send('Welcome to the hospital Inventory!');
}

// exorted these funtction to use them in the adminRoute 
module.exports = { getHospitalDashboard, getAdminInventory };