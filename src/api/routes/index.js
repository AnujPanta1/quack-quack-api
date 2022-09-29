const router = require("express").Router();

// importing sub-routers
const auth = require("./auth");
const team = require("./team");
const bug = require("./bugs");

// import token validation
const verifyToken = require("./verifyToken");

// connecting paths to routers
router.use("/auth", auth);
router.use("/team", verifyToken, team);
router.use("/bug", verifyToken, bug);

module.exports = router;
