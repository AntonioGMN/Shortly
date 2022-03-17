import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { validateTokenMiddleware } from "../middlewares/validateTokenMiddleware.js";
import shortSchema from "../schemas/shortSchema.js";
import { getShorts, postShort } from "../controllers/shortController.js";

const shortRouter = Router();
shortRouter.post(
	"/urls/shorten",
	validateSchemaMiddleware(shortSchema),
	validateTokenMiddleware,
	postShort
);
shortRouter.get("/urls/:shortUrl", validateTokenMiddleware, getShorts);
export default shortRouter;
