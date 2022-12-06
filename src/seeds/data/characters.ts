import { Table } from "../../domain/db"
import { getId } from "./helpers"

const createCharacter = (
  name: string,
  race: string,
  gender: "xy" | "xx",
  characterClass: string,
  alignment: string,
  abilityScoreId: number,
  portraitId: number
) => ({
  id: getId(Table.CHARACTERS),
  name,
  race,
  gender,
  characterClass,
  alignment,
  abilityScoreId,
  portraitId
})

export const characters = [
  createCharacter("Aragon", "human", "xy", "ranger", "Lawful Good", 1, 1),
  createCharacter("Legolas", "elf", "xy", "Archer", "Lawful Good", 2, 2),
  createCharacter("Gimly", "dwarf", "xy", "fighter", "Chaotic Good", 3, 3)
]
// {
//   "name": "name",
//   "race": "elf",
//   "gender": "yx",
//   "class": {
//     "1": {
//       "name": "thief",
//       "lvl": "1",
//       "exp": "0"
//     }
//   },
//   "abilities": {
//     "str": "15",
//     "dex": "15",
//     "con": "15",
//     "int": "15",
//     "wis": "15",
//     "car": "15"
//   },
//   "portrait": ""
// }
