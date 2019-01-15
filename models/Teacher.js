const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object
const TeacherSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true,
        required: "First Name is Required"
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true,
        required: "Last Name is required"
    },
    grade: {
        type: Array,
        required: "Selection Required"
    }
});

// This creates our model from the above schema, using Mongoose's model method
const Teacher = mongoose.model('Teacher', TeacherSchema);

// Export the Tweet model
module.exports = Teacher;