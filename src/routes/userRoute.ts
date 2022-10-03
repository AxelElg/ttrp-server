import { Router } from "express"

import { getUserById } from "../domain/actions/users"

const router = Router()

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const user = await getUserById(id)
  res.json(user)
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
