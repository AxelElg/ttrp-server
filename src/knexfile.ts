import * as path from "path"
import {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} from "./domain/constants"

const config = {
  client: "mysql2",
  connection: {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
  },
  pool: {
    min: 2,
    max: 10
  }
}

const database = {
  ...config,
  migrations: {
    directory: path.resolve("./migrations"),
    tableName: "knex-migrations"
  },
  seeds: {
    directory: path.resolve("./seeds")
  }
}

export default database
