import { Table } from "../../domain/db"
import { getId } from "./helpers"

import { characters } from "./characters"
import { portraits } from "./portraits"

const createCharacterPortraits = (cId: number, pId: number) => ({
  id: getId(Table.CHARACTER_PORTRAITS),
  cId,
  pId
})

export const characterPortraits = [
  createCharacterPortraits(characters[0].id, portraits[0].id),
  createCharacterPortraits(characters[1].id, portraits[1].id),
  createCharacterPortraits(characters[2].id, portraits[2].id)
]
