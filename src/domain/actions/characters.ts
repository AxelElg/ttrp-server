import db, { Table } from "../db"

const { CHARACTERS } = Table

export const getCharacter = (id: number) => {
  return db.select("id", "name", "email").from(CHARACTERS).where({ id }).first()
}

export const updateCharacter = (id: number, fields: any) => {
  console.log(fields)

  return db.where({ id }).update(fields).into(CHARACTERS)
}

export const deleteCharacter = (id: number) => {
  return db.table(CHARACTERS).where({ id }).del()
}
