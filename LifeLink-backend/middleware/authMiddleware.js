const jwt = require('jsonwebtoken')
require('dotenv').config()
const mongoose = require('mongoose')
const User = require("../models/user");

//middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }
  
    try {
        const tokenPart = token.startsWith('Bearer ') ? token.slice(8) : token;
        const decoded = jwt.verify(tokenPart, process.env.JWT_SECRET);
        console.log(decoded)
        req.user = decoded;
        next();
    } catch (err) {
      res.status(401).json({ msg: 'Invalid token' });
    }
};

//middleware to check that a user is admin or not 
const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied: Admins only' });
    }
    next();
};
  
module.exports = { authMiddleware, adminMiddleware };