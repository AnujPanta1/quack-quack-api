// given team id find all bugs posted within that team

const Teams = require("../../models/Teams");

// if given employeeId find return all bugs made by that employee
module.exports = async (req, res) => {
	// fetch team and make sure it exists and user has access to it
	const team = await Teams.findOne({
		_id: req.params.teamId,
		manager: req.user,
	});
	if (!team) {
		return res.status(400).send("User does not own team with given id");
	}

	if (req.params.employeeId) {
		const employeeBugs = team.bugs.filter(
			(bug) => bug.author === req.params.employeeId
		);

		res.send(employeeBugs);
	} else {
		res.send(team.bugs);
	}
};
