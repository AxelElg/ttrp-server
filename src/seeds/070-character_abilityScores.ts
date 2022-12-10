import { Knex } from "knex"
import { Table } from "../domain/db"
import { characterAbilityScores } from "./data/characterAbilityScores"

export const seed = (knex: Knex) =>
  Promise.all(
    characterAbilityScores.map((characterAbilityScore) =>
      knex(Table.CHARACTER_ABILITY_SCORES).insert(characterAbilityScore)
    )
  )
