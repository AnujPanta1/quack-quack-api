const Teams = require("../../models/Teams");
const User = require("../../models/User");

// returns all joined teams, if given name returns that joined team
module.exports = async (req, res) => {
    const user = await User.findOne({ _id: req.user });

    if (req.params.name) {
        // get the team we're part of based on name
        const teams = await Teams.find({
            _id: {
                $in: user.joinedTeams,
            },
            name: req.params.name,
        });

        // if no teams found return error
        if (teams.length === 0) {
            return res.status(400).send("No teams exists with that name");
        }

        res.send(teams);
    } else {
        // find teams that the person has joined
        const joinedTeams = await Teams.find({
            _id: {
                $in: user.joinedTeams,
            },
        });

        res.send(joinedTeams);
    }
};
