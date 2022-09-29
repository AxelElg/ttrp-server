import { Table } from "../../domain/db"
import { getId } from "./helpers"

import { users } from "./users"

const createPassword = (userId: number, password: string) => ({
  id: getId(Table.PASSWORDS),
  userId,
  password
})

export const passwords = [
  createPassword(users[0].id, "password123"),
  createPassword(users[1].id, "password123")
]
