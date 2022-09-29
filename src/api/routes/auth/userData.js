const User = require("../../models/User");

// getting json web token and returning user
module.exports = async (req, res) => {
    // fetch user
    const user = await User.findOne({ _id: req.user });

    // if no user found then return an error
    if (!user) {
        res.status(400).send("Cannot find user with given token");
    }

    // just return the data
    res.send(user);
};
