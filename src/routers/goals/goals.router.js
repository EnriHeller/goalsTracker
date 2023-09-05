import { Router } from "express";
import { GoalsController } from "../../controllers/goals.controller.js";

const router = Router()

router.get("/", GoalsController.getAll)

router.get("/:goalId", GoalsController.getById)

router.post("/", GoalsController.create)



export default router;