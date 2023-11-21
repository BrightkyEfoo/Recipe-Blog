import { Router } from "express";
import { getRecipeByIdhandler, healthCheckController , postRecipeHandler , getSumbitPageHandler } from "./Recipe.controllers.js";

/**
 * this router handles all routes that begin by "/recipe"
 */
const router = Router();

router.get("/health-check", healthCheckController);
router.get("/submit" , getSumbitPageHandler)
router.post("/submit" , postRecipeHandler)
router.get("/:id" , getRecipeByIdhandler)
export default router;
