export type AbilityScores = {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export type NewCharacter = {
  name: string
  race: string
  gender: string
  characterClass: string
  pId: number
  abilityScores: AbilityScores
}

export type Portrait = {
  id: number
  img_slug: string
}

export type Character = {
  id: number
  name: string
  race: string
  gender: string
  characterClass: string
  img_slug: string
  abilityScores: AbilityScores
}
