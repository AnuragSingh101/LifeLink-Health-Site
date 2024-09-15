const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/authRoute');
require('dotenv').config();
router
const app = express()

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




const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} `);