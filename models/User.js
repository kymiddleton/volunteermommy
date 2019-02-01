const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new Schema object
const UserSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        default: ''
    },
    password: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        default: ''
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSynch(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// This creates our model from the above schema, using Mongoose's model method
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;