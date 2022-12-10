import { Knex } from "knex"
import { Table } from "../domain/db"
import { characters } from "./data/characters"

export const seed = (knex: Knex) =>
  Promise.all(characters.map((character) => knex(Table.CHARACTERS).insert(character)))
