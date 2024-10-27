const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser');

//importes express function in app variable 
const app = express()

// auth modulel functions imports 
const router = require('./routes/authRoute');
const { authMiddleware } = require('./middleware/authMiddleware');
const { adminMiddleware } = require('./middleware/adminMiddleware')
const adminRoute = require('./routes/adminRoute')
const userRoutes = require('./routes/userRoutes')
const bloodInventoryRoutes = require('./routes/BloodRoutes');
const donorRoute = require('./routes/DonorRoute')
const campignRoute = require('./routes/')

// Add this middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


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

// Site routes ->
//
//auth routes 
app.use('/api/auth',router)

//admin routes for hospital only or only for admins
app.use('/api/admin', adminRoute);

//user routes for the user-accessable areas 
app.use('/api/user', userRoutes)

// blood inventory routes 
app.use('/api/bloodInventory', bloodInventoryRoutes);

// blood donor routes 
app.use('/api/donor', donorRoute);

// campign Routes 
app.use('/api/campign', campignRoute);



// running this server in local host 5000
const port = process.env.PORT || 5000;

// using app to run this server 
app.listen(port, () => `Server running on port ${port} `);