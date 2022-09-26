import path from "path"
import dotenv from "dotenv"

dotenv.config({ path: path.join(__dirname, "../../.env") })

export const NODE_ENV = process.env.NODE_ENV || "development"

export const PORT = process.env.PORT || 3000

export const MYSQL_HOST = process.env.MYSQL_HOST
export const MYSQL_PORT = process.env.MYSQL_PORT
export const MYSQL_USER = process.env.MYSQL_USER
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE

export type Values<T extends object> = T[keyof T]
