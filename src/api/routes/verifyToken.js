const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
    // getting the token and making sure that it's there
    const token = req.header("auth-token");
    console.log(req);
    if (!token) return res.status(400).send("Access denied.");
    try {
        // verifying tht token
        const verified = jwt.verify(token, "SECRET");

        // making sure user exists associated with token
        const user = await User.findOne({ _id: verified });
        if (!user) {
            return res.status(400).send("No user associated with that user.");
        }
        req.user = verified;
    } catch (err) {
        return res.status(400).send("Invalid Token");
    }

    next();
};
