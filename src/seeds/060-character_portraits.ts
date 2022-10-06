import { Knex } from "knex"
import { Table } from "../domain/db"
import { characterPortraits } from "./data/characterPortraits"

export const seed = (knex: Knex) =>
  Promise.all(
    characterPortraits.map((characterPortrait) =>
      knex(Table.CHARACTER_PORTRAITS).insert(characterPortrait)
    )
  )
