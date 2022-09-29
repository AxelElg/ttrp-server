import { Knex } from "knex"
import { Table } from "../domain/db"

const tableNames = Object.values(Table).reverse()

export const seed = async (knex: Knex) =>
  await Promise.all(tableNames.map((table) => knex(table).del()))
