import db, { Table } from "../db"

const { CHARACTERS, CHARACTER_ABILITY_SCORES, CHARACTER_PORTRAITS, PORTRAITS } = Table

const [c, cAS, cP, p] = [
  CHARACTERS,
  CHARACTER_ABILITY_SCORES,
  CHARACTER_PORTRAITS,
  PORTRAITS
]

export const getCharacter = async (id: number) => {
  const characterData: any = await db
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
      "con"
    )
    .from(c)
    .where(`${c}.id`, id)
    .first()
    .innerJoin(cAS, `${c}.abilityScoreId`, `${cAS}.id`)
    .innerJoin(cP, `${c}.portraitId`, `${cP}.cid`)
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

export const updateCharacter = (id: number, fields: any) => {
  console.log(fields)

  return db.where({ id }).update(fields).into(CHARACTERS)
}

export const deleteCharacter = (id: number) => {
  return db.table(CHARACTERS).where({ id }).del()
}
