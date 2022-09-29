const User = require("../../models/User");
const bcrypt = require("bcryptjs");

// registering user
module.exports = async (req, res) => {
	// check if user already exists
	const userExists = await User.findOne({ email: req.body.email });
	if (userExists) {
		return res.status(400).send("User with that email already exists");
	}

	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// create a new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});

	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (error) {
		res.status(400).send(error);
	}
};
