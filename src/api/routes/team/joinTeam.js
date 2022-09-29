const Teams = require("../../models/Teams");
const User = require("../../models/User");

// given team id and the access code we join the team
module.exports = async (req, res) => {
    // fetch user
    const user = await User.findOne({ _id: req.user });

    // make sure team exists
    const team = await Teams.findOne({ _id: req.params.teamId });
    if (!team) {
        return res.status(400).send("Team with given id does not exists");
    }

    // check to see if the password is correct
    if (req.params.accessCode != team.accessCode) {
        res.status(400).send("Wrong access Code");
    }

    // check if employee already joined the team
    if (user.joinedTeams.includes(team._id)) {
        return res.status(400).send("User already part of team");
    }

    // add to employess joined team id
    user.joinedTeams.push(team._id);

    // add user id to team's employees list
    team.employees.push(user._id);

    // save the user and the team
    await user.save();
    await team.save();

    res.send("success");
};
