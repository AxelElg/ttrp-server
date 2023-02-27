import { Router } from "express"

import authRoute from "./authRoute"
import dndApiRoute from "./dndApiRoute"
import usersRoute from "./usersRoute"
import characterRoute from "./charactersRoute"
import portraitsRoute from "./portraitsRoute"

const router = Router()

router.use("/auth", authRoute)
router.use("/dnd-api", dndApiRoute)
router.use("/users", usersRoute)
router.use("/characters", characterRoute)
router.use("/portraits", portraitsRoute)

export default router
