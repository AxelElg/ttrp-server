import { Router } from "express"

import { createResponse } from "./helpers"
import {
  createPortrait,
  deletePortrait,
  getPortrait,
  getPortraits
} from "../domain/actions/portraits"
import { Portrait } from "../domain/types"

const router = Router()

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const Portrait: Portrait = await getPortrait(id)

  res.send(createResponse(Portrait))
})

router.get("/", async (_req, res) => {
  const Portraits: Portrait[] = await getPortraits()

  res.send(createResponse(Portraits))
})

router.post("/create", async (req, res) => {
  const { img_slug } = req.body
  const result: Portrait = await createPortrait(img_slug)

  res.send(createResponse(result))
})

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id)
  const result = await deletePortrait(id)

  res.send(createResponse(result))
})

export default router
