// middleware/adminMiddleware.js

const adminMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'user') {
    return res.status(403).json({ msg: 'Access denied: Admins only' });
  }
  next();
};

module.exports = { adminMiddleware };
