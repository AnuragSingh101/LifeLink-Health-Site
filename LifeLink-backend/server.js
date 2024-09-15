const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/authRoute');
const { authMiddleware, adminMiddleware } = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express()
// Add this middleware to parse JSON bodies
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI,)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

//auth routes 
app.use('/api/auth',router)

// Protected Route: Only authenticated users can access
app.get('/user', authMiddleware, (req, res) => {
    res.send(`Hello, ${req.user.id}!`);
  });

// Admin-only route
app.get('/admin', authMiddleware, adminMiddleware, (req, res) => {
    res.send('Welcome Admin!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} `);