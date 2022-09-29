import { Router } from "express"

import { standardRequest, getClass, getRace } from "../domain/actions/dndApi"

const router = Router()

router.get("/races/:playerRace", async (req, res) => {
  try {
    const { playerRace } = req.params
    const result = await getRace(playerRace)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

router.get("/classes/:playerClass", async (req, res) => {
  try {
    const { playerClass } = req.params
    const result = await getClass(playerClass)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

router.get("*", async (req, res) => {
  try {
    const result = await standardRequest(req.path)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

export default router
