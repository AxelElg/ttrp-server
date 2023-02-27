import { Table } from "../../domain/db"
import { getId } from "./helpers"

const createPortraits = (img_slug: string) => ({
  id: getId(Table.PORTRAITS),
  img_slug
})

export const portraits = [
  createPortraits("/qwerty"),
  createPortraits("/asdfgh"),
  createPortraits("/zxcvbn")
]
