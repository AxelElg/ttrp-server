import { Knex } from "knex"
import { Table } from "../domain/db"
import { users } from "./data/users"

export const seed = (knex: Knex) =>
  Promise.all(users.map((user) => knex(Table.USERS).insert(user)))
