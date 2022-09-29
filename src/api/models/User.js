const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 1,
        max: 1024,
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 100,
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now,
    },
    ownedTeams: [String],
    joinedTeams: [String],
});

module.exports = module.exports = mongoose.model("User", UserSchema);
