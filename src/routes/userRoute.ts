import { Router } from "express"

const router = Router()

// should return one user
router.get("/:id", (req, res) => {
  res.sendStatus(503)
})

// should return a list of users matching the query
router.get("/search/:query", (req, res) => {
  res.sendStatus(503)
})

// should update an existing user
router.put("/:id", (req, res) => {
  res.sendStatus(503)
})

// should delete an existing user
router.delete("/:id", (req, res) => {
  res.sendStatus(503)
})

export default router
