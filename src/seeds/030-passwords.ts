import { Knex } from "knex"
import { Table } from "../domain/db"
import { passwords } from "./data/passwords"

export const seed = (knex: Knex) =>
  Promise.all(passwords.map((password) => knex(Table.PASSWORDS).insert(password)))
