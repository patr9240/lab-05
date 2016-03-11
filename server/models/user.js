"use strict";
var mongoose = require('mongoose');
//bcrypt = require(bcrypt);
// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required',
        index: { unique: true }
    },
    password: {
        type: String,
        default: '',
        trim: true,
        required: 'Password is required'
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'E-Mail is required'
    }
});
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.User = mongoose.model('User', userSchema);

//# sourceMappingURL=user.js.map
