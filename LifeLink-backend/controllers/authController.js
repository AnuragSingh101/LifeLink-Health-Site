
// importent imports 
const { model } = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const user = require("../models/user");
const { configDotenv } = require("dotenv");



const registerUser = async(req, res) => {
   const {firstName, lastName, userName, email, password, role} = req.body
   try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }
  
    //hashing user password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user in the database by using the credentials from the form
    const newUser = new User({ firstName, lastName, userName, email, password:hashedPassword, role });
    await newUser.save();
  

    //generating jwt token for authentication
    const token = jwt.sign({ id: newUser._id, role: newUser.role, firstName: newUser.firstName, lastName: newUser.lastName }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token, user: { id: newUser._id, username: newUser.username, role: newUser.role } });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server is facing some error, please try again later' });
  }
    
}

// function to login as a admin or a normal user 
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // matching hash password with the user password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        console.log('userdata',{
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            id: user._id
        })
        // generating a jwt for the authentication 
        const token = jwt.sign({ id: user._id, role: user.role, firstName: user.firstName, lastName: user.lastName }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ 
            token, 
            user: { 
              id: user._id, 
              role: user.role, 
              firstName: user.firstName, 
              lastName: user.lastName 
            }
          });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
 }

// exported the registration and login funtion to use them for login and signUp 
module.exports = {
    registerUser,
    loginUser
}

// error to be solve -> register krte time hmko dekhana hai ki ye username phle se used hai 
// need to work on