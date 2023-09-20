import db, { Table } from "../db"
import { NewUser } from "../types"

const { USERS, PASSWORDS } = Table

export const addUser = async (newUser: NewUser) => {
  const { password, ...fields } = newUser
  // console.log(fields)

  return db
    .insert(fields)
    .into(USERS)
    .select("id")
    .then(async (userId) => {
      await db
        .insert({
          userId,
          password
        })
        .into(PASSWORDS)

      return getUser(userId[0])
    })
}

export const getUser = async (id: number) => {
  return await db.select("*").from(USERS).where({ id }).first()
}

export const updateUser = async (id: number, fields: any) => {
  return await db
    .where({ id })
    .update(fields)
    .into(USERS)
    .then(() => db.select("*").from(USERS).where({ id }).first())
}

export const deleteUser = async (id: number) => {
  return await db.table(USERS).where({ id }).del()
}
