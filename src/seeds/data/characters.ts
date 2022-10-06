import { Table } from "../../domain/db"
import { getId } from "./helpers"

const createCharacter = (
  name: string,
  race: string,
  gender: "xy" | "xx",
  portraitId: number
) => ({
  id: getId(Table.CHARACTERS),
  name,
  race,
  gender,
  portraitId
})

export const characters = [
  createCharacter("Aragon", "human", "xy", 1),
  createCharacter("Legolas", "elf", "xy", 2),
  createCharacter("Gimly", "dwarf", "xy", 3)
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
