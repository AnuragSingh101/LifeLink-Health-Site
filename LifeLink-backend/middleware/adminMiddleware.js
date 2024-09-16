const jwt = require('jsonwebtoken')
require('dotenv').config()

//middleware to check that a user is admin or not 
const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied: Admins only' });
    }
    next();
};
  
module.exports = { adminMiddleware };