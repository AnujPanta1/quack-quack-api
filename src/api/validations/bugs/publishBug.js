const Joi = require("@hapi/joi");

module.exports = (req, res, next) => {
	const bugSchema = Joi.object({
		topic: Joi.string().required().min(1).max(100),
		createdAt: Joi.date(),
		author: Joi.string().min(1).max(100),
		message: Joi.string().required().min(1).max(500),
		tags: Joi.array().items(Joi.string()),
		teamId: Joi.string().min(1).max(100),
	});

	const { error } = bugSchema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	next();
};
