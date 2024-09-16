// Building a function for the users routes in the site 
const getUserDashboard = (req, res) => {
   const { firstName, lastName } = req.user;
   res.json({message:`Welcom to user DashBoard ${firstName} ${lastName}`});
}

module.exports = {getUserDashboard}
