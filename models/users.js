const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        lowercase: true,
    },
    userPassword:{
        type: String,
    },
    userAge: {
        type: Number,
    },
    isMale:{
        type: Boolean,
    }
});

module.exports = mongoose.model("User", userSchema);