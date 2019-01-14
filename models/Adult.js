const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object
const AdultSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: "First Name is Required"
    },
    middleInitial: {
        type: String,
        trim: true,
        lowercase: true,
        required: "Middle Initial is Required"
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: "Last Name is required"
    },
    email: {
        type: String,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        trim: true,
        required: "Valid Email Address is Required"
    },
    phoneNumber: {
        type: String,
        trim: true,
        minlength: 10,
        required: "Valid Phone Number is Required",
        validate: {
            validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
            },
        message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    children: {
        type: Array,
        trim: true,
        required: "Please enter relationship to enrolled student"
    }
});

// This creates our model from the above schema, using Mongoose's model method
const Adult = mongoose.model('Adult', AdultSchema);

// Export the Tweet model
module.exports = Adult;