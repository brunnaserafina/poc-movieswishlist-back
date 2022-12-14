import { Router } from "express";

import { authRouter } from "./authRouter.js";
import { wishlistRouter } from "./wishlistRouter.js";
import { movieRouter } from "./movieRouter.js";

const router = Router();

router.use(authRouter);
router.use(wishlistRouter);
router.use(movieRouter);

export { router };
