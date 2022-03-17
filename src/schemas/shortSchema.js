import joi from "joi";

const shortSchema = joi.object({
	url: joi.string().required(),
});

export default shortSchema;
