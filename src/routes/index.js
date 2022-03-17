import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import shortRouter from "./shortRouter.js";

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(shortRouter);

export default router;
