const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        require: true,
    },
    LastName : {
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

module.exports = mongoose.model('User', userSchema)