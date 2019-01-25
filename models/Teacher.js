const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object
const TeacherSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: "Selection Required",
    },
    grade: {
        type: String,
        required: "Selection Required"
    }
});

// This creates our model from the above schema, using Mongoose's model method
const Teacher = mongoose.model('Teacher', TeacherSchema);

// Export the Tweet model
module.exports = Teacher;