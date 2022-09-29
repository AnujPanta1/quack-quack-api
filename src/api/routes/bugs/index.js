const bug = require("express").Router();

// fetching functions
const publishBug = require("./publishBug");
const getPostedBug = require("./getPostedBug");
const getTeamBug = require("./getTeamBug");
const deleteBug = require("./deleteBug");

// fetching validations
const publishBugValidation = require("../../validations/bugs/publishBug");

// connecting routes, validations, and functions
bug.post("/publishBug/:teamId", publishBugValidation, publishBug);
bug.get("/getPostedBug/:teamId", getPostedBug);
bug.get("/getTeamBug/:teamId/:employeeId?", getTeamBug);
bug.delete("/deleteBug/:teamId/:bugId", deleteBug);

module.exports = bug;
