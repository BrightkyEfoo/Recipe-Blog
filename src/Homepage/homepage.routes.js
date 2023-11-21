import { Router } from "express";
import { healthCheckController, homepageController } from "./homepage.controller.js";

/**
 * this router handles all routes that begin by "/"
 */
const router = Router();

router.get("/health-check", healthCheckController);
router.get("/", homepageController);

export default router;
