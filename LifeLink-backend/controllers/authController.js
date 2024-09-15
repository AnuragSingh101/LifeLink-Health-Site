const { model } = require("mongoose");
const User = require("../models/user");
const bcrypt = require('bcrypt')


const registerUser = async(req, res) => {
//    res.status(200).json({message : 'Registration Page for user'});
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
  
    res.status(201).json({ msg: 'User created successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server is facing some error, please try again later' });
  }
    
}


const loginUser = async (req, res) => {
    // res.status(200).json({message : 'Login Page for user'});
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
        
        res.json({user: { id: user._id, userName: user.userName, role: user.role } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
 }

module.exports = {
    registerUser,
    loginUser
}