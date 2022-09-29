const Teams = require("../../models/Teams");
const User = require("../../models/User");

// given a team id publishes a bug for the current user
module.exports = async (req, res) => {
	// make sure team exists
	const team = await Teams.findOne({ _id: req.params.teamId });
	if (!team) {
		return res.status(400).send("Cannot find team with given id");
	}

	const user = await User.findOne({ _id: req.user });

	// make sure user is apart of team
	if (!team.employees.includes(user._id)) {
		return res.status(400).send("You aren't in this team");
	}

	// create bug
	const bug = {
		topic: req.body.topic,
		author: user._id,
		message: req.body.message,
		tags: req.body.tags,
		teamId: team._id,
	};

	// push bug into team!
	team.bugs.push(bug);
	await team.save();

	res.send("Success");
};
