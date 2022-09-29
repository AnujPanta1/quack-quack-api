const auth = require("express").Router();
const verifyToken = require("../verifyToken");

// fetching functions
const register = require("./register");
const login = require("./login");
const userData = require("./userData");

// fetching the validation for the posts
const registerValidation = require("../../validations/user/register");
const loginValidation = require("../../validations/user/login");

// connecting paths, validations, and functions
auth.post("/register", registerValidation, register);
auth.post("/login", loginValidation, login);
auth.get("/userData", verifyToken, userData);

module.exports = auth;
