const Teams = require("../../models/Teams");

// returns all teams user owns, if name given returns that one
module.exports = async (req, res) => {
	if (req.params.name) {
		// retrieves all teams
		const teams = await Teams.find({
			name: req.params.name,
			manager: req.user._id,
		});

		// if no teams found return error
		if (teams.length === 0) {
			return res.status(400).send("No teams exist with given name.");
		}

		res.send(teams);
	} else {
		// find all teams that the user owns
		const ownedTeams = await Teams.find({
			manager: req.user,
		});

		res.send(ownedTeams);
	}
};
