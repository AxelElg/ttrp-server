import { DND_API_URL } from "../constants"

export const getRace = async (playerRace: string) => {
  const result = await fetch(`${DND_API_URL}/races/${playerRace}`)
  if (result.ok) {
    return result.json()
  }
  throw new Error()
}

export const getClass = async (playerClass: string) => {
  const result = await fetch(`${DND_API_URL}/classes/${playerClass}`)
  if (result.ok) {
    return result.json()
  }
  throw new Error()
}

export const standardRequest = async (route: string) => {
  const result = await fetch(DND_API_URL + route)
  if (result.ok) {
    return result.json()
  }
  throw new Error()
  // // const result = await axios.get(DND_API_URL + route).then((res) => res.data)
  // return result
}
