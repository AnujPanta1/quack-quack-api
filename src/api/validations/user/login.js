const Joi = require("@hapi/joi");

module.exports = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().max(255).required(),
		password: Joi.string().min(4).max(1024).required(),
	});

	const { error } = schema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	next();
};
