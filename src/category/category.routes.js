import { Router } from "express";
import { categoryController , categoryControllerByName} from "./category.controllers.js";

const router = Router();

router.get("/", categoryController);
router.get("/:name" , categoryControllerByName)

export default router;
