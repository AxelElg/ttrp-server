import { Table } from "../../domain/db"
import { getId } from "./helpers"

const createCharacter = (
  name: string,
  race: string,
  gender: "xy" | "xx",
  characterClass: string,
  alignment: string
) => ({
  id: getId(Table.CHARACTERS),
  name,
  race,
  gender,
  characterClass,
  alignment
})

export const characters = [
  createCharacter("Aragon", "human", "xy", "ranger", "Lawful Good"),
  createCharacter("Legolas", "elf", "xy", "Archer", "Lawful Good"),
  createCharacter("Gimly", "dwarf", "xy", "fighter", "Chaotic Good")
]
