// Controller function to handle the hospital dashboard
const getHospitalDashboard = (req, res) => {
    res.send('Welcome to the hospital dashboard!');
};

const getAdminInventory = (req, res) => {
    res.send('Welcome to the hospital Inventory!');

}


module.exports = { getHospitalDashboard, getAdminInventory };