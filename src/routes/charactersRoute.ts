import { Router } from "express"

import { createResponse } from "./helpers"
import { getCharacter } from "../domain/actions/characters"

const router = Router()

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const character = await getCharacter(id)

  res.send(createResponse(character))
})

export default router
