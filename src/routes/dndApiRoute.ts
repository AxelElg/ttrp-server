import { Router } from "express"

import { standardRequest, getClass, getRace } from "../domain/actions/dndApi"

const router = Router()

router.get("*", async (req, res) => {
  try {
    const result = await standardRequest(req.path)
    res.json(result)
  } catch (error) {
    res.sendStatus(404)
  }
})

export default router
