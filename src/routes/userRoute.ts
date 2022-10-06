import { Router } from "express"

import { getUser, updateUser, deleteUser } from "../domain/actions/users"
import { createResponse } from "./helpers"

const router = Router()

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const user = await getUser(id)
  res.json(createResponse(user))
})

// should update an existing user
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const user = await updateUser(id, req.body)
  res.json(createResponse(user))
})

// should delete an existing user
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const result = await deleteUser(id)
  res.json(createResponse(result))
})

export default router
