import createError from "http-errors"
import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"
import { TOKEN_SECRET } from "../domain/constants"

export default (req: Request, res: Response, next: NextFunction) => {
  console.log("triggered")

  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (token == null) return res.json(createError(401))

  jwt.verify(token, TOKEN_SECRET as string, (err: any, user: any) => {
    if (err) return res.json(createError(403))
    // @ts-ignore
    req.user = user

    next()
  })
}
