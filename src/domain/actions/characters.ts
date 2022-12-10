import { characters } from "../../seeds/data/characters"
import db, { Table } from "../db"
import { Character, NewCharacter } from "../types"

const { CHARACTERS, CHARACTER_ABILITY_SCORES, CHARACTER_PORTRAITS, PORTRAITS } = Table

const [c, cAS, cP, p] = [
  CHARACTERS,
  CHARACTER_ABILITY_SCORES,
  CHARACTER_PORTRAITS,
  PORTRAITS
]

export const getCharacter = async (id: number) => {
  const characterData = await db
    .select(
      `${c}.id`,
      "name",
      "race",
      "gender",
      "characterClass",
      "alignment",
      "slug",
      "str",
      "dex",
      "con",
      "int",
      "wis",
      "cha"
    )
    .from(c)
    .where(`${c}.id`, id)
    .first()
    .innerJoin(cAS, `${c}.id`, `${cAS}.cId`)
    .innerJoin(cP, `${c}.id`, `${cP}.cId`)
    .innerJoin(p, `${cP}.pId`, `${p}.id`)

  const { str, dex, con, int, wis, cha, ...data } = characterData

  return {
    ...data,
    abilityScores: {
      str,
      dex,
      con,
      int,
      wis,
      cha
    }
  }
}

export const createCharacter = async (character: NewCharacter) => {
  const { abilityScores, pId, ...fields } = character

  return await db
    .insert(fields)
    .into(CHARACTERS)
    .select("id")
    .then(async (cId) => {
      await db
        .insert({
          cId,
          ...abilityScores
        })
        .into(CHARACTER_ABILITY_SCORES)

      await db
        .insert({
          cId,
          pId
        })
        .into(CHARACTER_PORTRAITS)

      return getCharacter(cId[0])
    })
}

export const deleteCharacter = (id: number) => {
  return db.table(CHARACTERS).where({ id }).del()
}

export const updateCharacterPortrait = async (cId: number, pId: number) => {
  return await db
    .where(cId)
    .update(pId)
    .into(CHARACTER_PORTRAITS)
    .then(() => {
      return getCharacter(cId)
    })
}
