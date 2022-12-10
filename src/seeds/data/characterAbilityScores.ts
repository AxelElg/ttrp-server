import { Table } from "../../domain/db"
import { characters } from "./characters"
import { getId } from "./helpers"

const createCharacterAbilityScores = (
  cId: number,
  str: number,
  dex: number,
  con: number,
  int: number,
  wis: number,
  cha: number
) => ({
  id: getId(Table.CHARACTER_ABILITY_SCORES),
  cId,
  str,
  dex,
  con,
  int,
  wis,
  cha
})

export const characterAbilityScores = characters.map((character) =>
  createCharacterAbilityScores(character.id, 18, 18, 18, 18, 18, 18)
)
