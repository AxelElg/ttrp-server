import createError from "http-errors"
import express, { Request, Response, NextFunction } from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"
import helmet from "helmet"

import middleware from "./middleware"
import router from "./routes"

const app = express()

app.use(
  helmet({
    contentSecurityPolicy: false
  })
)
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(middleware)
app.use(router)

// catch 404 and forward to error handler
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createError(404))
})

export default app
