import { Knex } from "knex"
import { Table } from "../domain/db"

export const up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable(
    Table.CHARACTER_PORTRAITS,
    (table: Knex.TableBuilder) => {
      table.increments()
      table.integer("cId").unsigned().notNullable()
      table.foreign("cId").references(`${Table.CHARACTERS}.id`).onDelete("CASCADE")
      table.integer("pId").unsigned().notNullable()
      table.foreign("pId").references(`${Table.PORTRAITS}.id`).onDelete("CASCADE")
    }
  )
}

export const down = async (knex: Knex): Promise<any> =>
  knex.schema.dropTableIfExists(Table.CHARACTER_PORTRAITS)
