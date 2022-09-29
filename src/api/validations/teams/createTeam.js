const Joi = require("@hapi/joi");

module.exports = (req, res, next) => {
	// const bugSchema = Joi.object({
	// 	topic: Joi.string().required().min(1).max(100),
	// 	createdAt: Joi.date(),
	// 	author: Joi.string().required().min(1).max(100),
	// 	message: Joi.string().min(1).max(500),
	// 	tags: Joi.array().items(Joi.string()),
	// 	teamId: Joi.string().required().min(1).max(100),
	// });

	const teamSchema = Joi.object({
		name: Joi.string().required().min(1).max(50),
		accessCode: Joi.string().required().min(1).max(1024),
		// createdAt: Joi.date(),
		// employees: Joi.array().items(Joi.string()),
		// bugs: Joi.array().items(bugSchema),
	});
	const { error } = teamSchema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	next();
};
