const User = require("../../models/User");
const Team = require("../../models/Teams");

// creates a team
module.exports = async (req, res) => {
	// fetch user
	const user = await User.findOne({ _id: req.user });

	// making sure there aren't repeating team na,es
	if (user.ownedTeams.includes(req.body.name)) {
		return res.status(400).send("User already has team with given name.");
	}

	// create the new team
	const team = new Team({
		name: req.body.name,
		manager: user._id,
		accessCode: req.body.accessCode,
	});

	try {
		// save team and add teams id to ownedteam array
		const savedTeam = await team.save();
		user.ownedTeams.push(savedTeam._id);
		await user.save();
	} catch (err) {
		return res.status(400).send(err);
	}

	res.send("Success");
};
