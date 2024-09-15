const { model } = require("mongoose");

const registerUser = (req, res) => {
   res.status(200).json({message : 'Registration Page for user'});
}


const loginUser = (req, res) => {
    res.status(200).json({message : 'Login Page for user'});
 }

module.exports = {
    registerUser,
    loginUser,
}