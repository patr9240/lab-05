"use strict";
var mongoose = require('mongoose');
// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    Username: {
        type: String,
        default: '',
        trim: true,
        required: 'Username is required'
    },
    Password: {
        type: String,
        default: '',
        trim: true,
        required: 'Password is required'
    }
});
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.User = mongoose.model('User', userSchema);

//# sourceMappingURL=users.js.map
