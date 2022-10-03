import db, { dbExecute, Table } from "../db"

const { USERS } = Table

export const getUserById = async (id: number) => {
  return db.select("id", "name", "email").from(USERS).where({ id }).first()
}
