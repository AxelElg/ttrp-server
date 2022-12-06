import { Table } from "../../domain/db"
import { getId } from "./helpers"

const createCharacterAbilityScores = (
  str: number,
  dex: number,
  con: number,
  int: number,
  wis: number,
  cha: number
) => ({
  id: getId(Table.CHARACTER_ABILITY_SCORES),
  str,
  dex,
  con,
  int,
  wis,
  cha
})

export const characterAbilityScores = [
  createCharacterAbilityScores(18, 18, 18, 18, 18, 18),
  createCharacterAbilityScores(17, 17, 17, 17, 17, 17),
  createCharacterAbilityScores(16, 16, 16, 16, 16, 16)
]
