const team = require("express").Router();

// fetching functions
const createTeam = require("./createTeam");
const getOwnedTeams = require("./getOwnedTeams");
const getJoinedTeams = require("./getJoinedTeams");
const deleteTeam = require("./deleteTeam");
const joinTeam = require("./joinTeam");

// fetching validations
const createTeamValidation = require("../../validations/teams/createTeam");

// connecting routes, validations, and functions
team.post("/createTeam", createTeamValidation, createTeam);
team.get("/getOwnedTeams/:name?", getOwnedTeams);
team.get("/getJoinedTeams/:name?", getJoinedTeams);
team.delete("/deleteTeam/:id", deleteTeam);
team.put("/joinTeam/:teamId/:accessCode", joinTeam);

module.exports = team;
