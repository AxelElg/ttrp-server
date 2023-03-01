import db, { Table } from "../db"

const { USERS } = Table

export const getUser = async (id: number) => {
  return await db.select("id", "name", "email").from(USERS).where({ id }).first()
}

export const updateUser = async (id: number, fields: any) => {
  return await db.where({ id }).update(fields).into(USERS)
}

export const deleteUser = async (id: number) => {
  return await db.table(USERS).where({ id }).del()
}
