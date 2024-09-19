// imported mongoose npm to build a user schema 
const mongoose = require('mongoose')

// user schema 
const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        require: true,
    },
    lastName : {
        type: String,
        require: true,
    },
    userName : {
        type: String,
        require: true,
        unique: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],  // Defining roles
    }
})


// export user schema to use them for users the authentication 
module.exports = mongoose.model('User', userSchema)