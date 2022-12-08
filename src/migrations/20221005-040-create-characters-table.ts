import { Knex } from "knex"
import { Table } from "../domain/db"

export const up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable(Table.CHARACTERS, (table: Knex.TableBuilder) => {
    table.increments()
    table.string("name", 100).notNullable()
    table.string("race", 30).notNullable()
    table.string("gender", 2).notNullable()
    table.string("characterClass", 30).notNullable()
    table.string("alignment", 30).notNullable()
    table.integer("abilityScoreId").notNullable()
    table.integer("portraitId").notNullable()
    table.timestamp("createdAt").defaultTo(knex.fn.now())
  })
}

export const down = async (knex: Knex): Promise<any> =>
  knex.schema.dropTableIfExists(Table.CHARACTERS)
