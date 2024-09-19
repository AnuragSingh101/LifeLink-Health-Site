const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

// modulel functions imports 
const router = require('./routes/authRoute');
const { authMiddleware } = require('./middleware/authMiddleware');
const { adminMiddleware } = require('./middleware/adminMiddleware')
const adminRoute = require('./routes/adminRoute')
const userRoutes = require('./routes/userRoutes')

//importes express function in app variable 
const app = express()


// Add this middleware to parse JSON bodies
app.use(express.json());


// MongoDb connection key to connect mongoDB with backend  
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';


// connnected mongoDB whith the backend 
mongoose.connect(mongoURI,)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

//auth routes 
app.use('/api/auth',router)


//admin routes for hospital only or only for admins
app.use('/api/admin', adminRoute);

//user routes for the user-accessable areas 
app.use('/api/user', userRoutes)

// Protected Route: Only authenticated users can access
app.get('/user', authMiddleware, (req, res) => {
    res.send(`Hello, ${req.user.id}!`);
  });

// Admin-only route
app.get('/admin', authMiddleware, adminMiddleware, (req, res) => {
    res.send('Welcome Admin!');
});


// running this server in local host 5000
const port = process.env.PORT || 5000;


// using app to run this server 
app.listen(port, () => `Server running on port ${port} `);