import { Knex } from "knex"
import { Table } from "../domain/db"

export const up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable(
    Table.CHARACTER_ABILITY_SCORE,
    (table: Knex.TableBuilder) => {
      table.increments()
      table.integer("str").unsigned().notNullable()
      table.integer("dex").unsigned().notNullable()
      table.integer("con").unsigned().notNullable()
      table.integer("int").unsigned().notNullable()
      table.integer("wis").unsigned().notNullable()
      table.integer("cha").unsigned().notNullable()
    }
  )
}

export const down = async (knex: Knex): Promise<any> =>
  knex.schema.dropTableIfExists(Table.CHARACTER_ABILITY_SCORE)
