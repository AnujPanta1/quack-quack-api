const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

// loging user and returning web token
module.exports = async (req, res) => {
    // verify email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Email not found");
    }

    // check if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).send("Invalid Password");
    }

    // create and assign token
    const token = jwt.sign({ _id: user._id }, "SECRET");
    res.header("auth-token", token).send(user);
};
