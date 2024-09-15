const { model } = require("mongoose");
const User = require("../models/user");



const registerUser = async(req, res) => {
//    res.status(200).json({message : 'Registration Page for user'});
   const {firstName, lastName, userName, email, password, role} = req.body
   try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }
  
    // Creating a new user in the database by using the credentials from the form
    const newUser = new User({ firstName, lastName, userName, email, password, role });
    await newUser.save();
  
    res.status(201).json({ msg: 'User created successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server is facing some error, please try again later' });
  }
   
}


const loginUser = (req, res) => {
    res.status(200).json({message : 'Login Page for user'});
 }

module.exports = {
    registerUser,
    loginUser
}