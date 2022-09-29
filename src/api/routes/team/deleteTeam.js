const User = require("../../models/User");
const Team = require("../../models/Teams");

// deleting team based on given id
module.exports = async (req, res) => {
	// fetching user
	const user = await User.findOne({ _id: req.user });

	// see if user has team with given id
	if (!user.ownedTeams.includes(req.params.id)) {
		return res.status(400).send("User does not own team with given id.");
	}

	// deleting team
	await Team.deleteOne({ _id: req.params.id });

	// remove that name from user owned team
	user.ownedTeams = user.ownedTeams.filter((ids) => ids !== req.params.id);
	await user.save();

	res.send("Success");
};
