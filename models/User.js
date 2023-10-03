const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
        enum: ["Admin", "User"],
    },
    date: {
        type: String,
        default: Date.now,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    token: {
        type: String,
    },
})

module.exports = mongoose.model("User", userSchema);