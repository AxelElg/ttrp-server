import { Table } from "../../domain/db"
import { getId } from "./helpers"

const createPortraits = (slug: string) => ({
  id: getId(Table.PORTRAITS),
  slug
})

export const portraits = [
  createPortraits("/qwerty"),
  createPortraits("/asdfgh"),
  createPortraits("/zxcvbn")
]
