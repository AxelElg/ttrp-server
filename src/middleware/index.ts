import { Router } from "express"

import authenticateToken from "./authenticateToken"

const router = Router()

router.use("/private", authenticateToken)

export default router
