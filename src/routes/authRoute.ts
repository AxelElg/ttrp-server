import { Router } from "express"

const router = Router()

// login as an existing user
router.get("/login", (req, res) => {
  res.sendStatus(503)
})

// signup as a new user
router.post("/signup", (req, res) => {
  res.sendStatus(503)
})

export default router
