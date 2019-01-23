const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object
const ChildSchema = new Schema({
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
    // grade: {
    //     type: String,
    //     required: "Selection Required"
    // },
    teacher: {
        type: String,
        required: "Selection Required",
    },
    parent: [{
        type: Schema.Types.ObjectId,
        ref: 'Adult'
        }
    ]
});

// This creates our model from the above schema, using Mongoose's model method
const Child = mongoose.model('Child', ChildSchema);

// Export the Tweet model
module.exports = Child;