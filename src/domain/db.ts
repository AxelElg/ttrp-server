import knex from "knex"
import {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} from "./constants"

const db = knex({
  client: "mysql2",
  connection: {
    host: MYSQL_HOST,
    // @ts-ignore
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
  }
})

export const Table = {
  USERS: "users",
  PASSWORDS: "passwords",
  PORTRAITS: "portraits",
  CHARACTERS: "characters",
  CHARACTER_PORTRAITS: "character_portraits"
}

type dbExecuteParamType = {
  sql: string
  bindings?: any
  many?: boolean
}

export const dbExecute = ({ sql, bindings = {}, many = false }: dbExecuteParamType) => {
  new Promise(async (resolve, reject) => {
    try {
      const dbResult = await db.raw(sql, bindings)
      const result = many ? dbResult : dbResult[0]
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

export default db
