const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object
const UserSessionSchema = new Schema({
    userId: {
        type: Number,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

// This creates our model from the above schema, using Mongoose's model method
const UserSession = mongoose.model('UserSession', UserSessionSchema);

// Export the Tweet model
module.exports = UserSession;