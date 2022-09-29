const mongoose = require("mongoose");

const BugSchema = mongoose.Schema({
	topic: {
		type: String,
		required: true,
		min: 1,
		max: 100,
	},
	createdAt: {
		type: Date,
		required: false,
		default: Date.now,
	},
	author: {
		type: String,
		required: true,
		min: 1,
		max: 100,
	},
	message: {
		type: String,
		min: 1,
		max: 500,
	},
	tags: [String],
	teamId: {
		type: String,
		required: true,
		min: 1,
		max: 100,
	},
});

const TeamsSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 1,
		max: 50,
	},
	createdAt: {
		type: Date,
		required: false,
		default: Date.now,
	},
	manager: {
		type: String,
		required: true,
		min: 1,
		max: 50,
	},
	accessCode: {
		type: String,
		required: true,
		min: 1,
		max: 1024,
	},
	employees: [String],
	bugs: [BugSchema],
});

module.exports = mongoose.model("Team", TeamsSchema);
