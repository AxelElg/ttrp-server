import app from "./app"
import { PORT } from "./domain/constants"

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
