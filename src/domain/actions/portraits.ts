import db, { Table } from "../db"

const { PORTRAITS } = Table

export const getPortrait = async (id: number) => {
  return await db.select("id", "img_slug").from(PORTRAITS).where({ id }).first()
}

export const getPortraits = async () => {
  return await db.select("id", "img_slug").from(PORTRAITS)
}

export const createPortrait = async (img_slug: string) => {
  const id = await db.insert({ img_slug }).into(PORTRAITS)

  return {
    id: id[0],
    img_slug
  }
}

export const deletePortrait = async (id: number) => {
  return await db.table(PORTRAITS).where({ id }).del()
}
