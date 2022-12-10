import { Knex } from "knex"
import { Table } from "../domain/db"
import { portraits } from "./data/portraits"

export const seed = (knex: Knex) =>
  Promise.all(portraits.map((portrait) => knex(Table.PORTRAITS).insert(portrait)))
