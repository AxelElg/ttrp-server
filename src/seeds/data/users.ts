import { Table } from "../../domain/db"
import { getId, getEmail } from "./helpers"

const createUser = (name: string) => ({
  id: getId(Table.USERS),
  name,
  email: getEmail(name)
})

export const users = [createUser("Axel"), createUser("Oskar")]
