import { Router } from "express";
import usersRouter from "./users/users.router.js"
import goalsRouter from "./goals/goals.router.js"

const router = Router()

router.use("/users",usersRouter)
router.use("/goals",goalsRouter)

export default router;