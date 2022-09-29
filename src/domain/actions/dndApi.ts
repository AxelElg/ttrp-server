import axios from "axios"

import { DND_API_URL } from "../constants"

export const getRace = async (playerRace: string) => {
  console.log(`${DND_API_URL}races/${playerRace}`)

  const result = await axios
    .get(`${DND_API_URL}/races/${playerRace}`)
    .then((res) => res.data)
  return result
}

export const getClass = async (playerClass: string) => {
  const result = await axios
    .get(`${DND_API_URL}/classes/${playerClass}`)
    .then((res) => res.data)
  return result
}

export const standardRequest = async (route: string) => {
  const result = await axios.get(DND_API_URL + route).then((res) => res.data)
  return result
}
