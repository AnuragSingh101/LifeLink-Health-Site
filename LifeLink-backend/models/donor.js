// schema to get donor details

const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth : Date,
    gender: {type:String,enum : ['Male', 'female', 'Other']},
    bloodType:{type:String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']},
    contact: {
        phone: {type: Number, require: true},
        email: {type: String, require: true},
        address: {type: String, require: true}
    },
    lastDonationDate: Date,
})

const Donor = mongoose.model('Donor', donorSchema)

module.exports = Donor