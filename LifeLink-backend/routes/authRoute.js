const express = require('express')
const exoress = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router()

//registration route 
router.post("/register",registerUser);

//login route
router.post('/login',loginUser)


module.exports = router;