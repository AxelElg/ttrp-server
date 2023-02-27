import { Knex } from "knex"
import { Table } from "../domain/db"

export const up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable(Table.PORTRAITS, (table: Knex.TableBuilder) => {
    table.increments()
    table.string("img_slug", 256).notNullable()
    table.timestamp("createdAt").defaultTo(knex.fn.now())
  })
}

export const down = async (knex: Knex): Promise<any> =>
  knex.schema.dropTableIfExists(Table.PORTRAITS)
