import { Router } from "express"

import { createResponse } from "./helpers"
import {
  createCharacter,
  deleteCharacter,
  getCharacter,
  updateCharacterPortrait
} from "../domain/actions/characters"
import { Character } from "../domain/types"

const router = Router()

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const character: Character = await getCharacter(id)

  res.send(createResponse(character))
})

router.post("/create", async (req, res) => {
  const fields = req.body
  const result: Character = await createCharacter(fields)

  res.send(createResponse(result))
})

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const result = await deleteCharacter(id)

  res.send(createResponse(result))
})

router.put("/:id/portrait/:pId", async (req, res) => {
  const id = parseInt(req.params.id)
  const pId = parseInt(req.params.pId)
  const result: Character = await updateCharacterPortrait(id, pId)

  res.send(createResponse(result))
})

export default router
