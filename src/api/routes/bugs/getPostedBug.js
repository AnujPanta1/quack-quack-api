// given team name, and possbly an id return bugs

const Teams = require("../../models/Teams");
const User = require("../../models/User");

// if only team id then return all bugs within team
module.exports = async (req, res) => {
    // fetching user
    const user = await User.findOne({ _id: req.user });

    // make sure user is apart of team with given name
    if (!user.joinedTeams.includes(req.params.teamId)) {
        return res
            .status(400)
            .send("User is not a part of team with given name");
    }

    // fetch the team
    const team = await Teams.findOne({ _id: req.params.teamId });
    if (!team) {
        return res.status(400).send("Error");
    }

    // find a way to access all bugs within the team that belong to the user
    for (let thing of team.bugs) {
        console.log(thing.author);
    }

    const usersBugs = team.bugs.filter((bug) => bug.author === req.user["_id"]);
    res.send(usersBugs);
};
