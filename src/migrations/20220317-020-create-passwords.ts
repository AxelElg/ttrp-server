import { Knex } from "knex"
import { Table } from "../domain/db"

export const up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable(Table.PASSWORDS, (table: Knex.TableBuilder) => {
    table.increments()
    table.integer("userId").unsigned().notNullable()
    table.foreign("userId").references(`${Table.USERS}.id`).onDelete("CASCADE")
    table.string("password", 500).notNullable()
  })
}

export const down = async (knex: Knex): Promise<any> =>
  knex.schema.dropTableIfExists(Table.PASSWORDS)
