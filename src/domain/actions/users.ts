import db, { dbExecute, Table } from "../db"

const { USERS } = Table

export const getUser = (id: number) => {
  return db.select("id", "name", "email").from(USERS).where({ id }).first()
}

export const updateUser = (id: number, fields: any) => {
  console.log(fields)

  return db.where({ id }).update(fields).into(USERS)
}

export const deleteUser = (id: number) => {
  return db.table(USERS).where({ id }).del()
}
