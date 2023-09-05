import { Router } from "express";
import { UsersController } from "../../controllers/users.controller.js";

const router = Router()

router.get("/", UsersController.getAll)

router.get("/:userId", UsersController.getById)

router.post("/", UsersController.create)



export default router;