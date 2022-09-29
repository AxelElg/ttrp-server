import { Router } from "express"

import authRoute from "./authRoute"
import dndApiRoute from "./dndApiRoute"
import userRoute from "./userRoute"

const router = Router()

router.use("/auth", authRoute)
router.use("/dnd-api", dndApiRoute)
router.use("/private/user", userRoute)

export default router
