type FakeIds = {
  [key: string]: number
}

const fakeIds: FakeIds = {}

export const getId = (modal: string): number => {
  fakeIds[modal] = fakeIds.hasOwnProperty(modal) ? fakeIds[modal] + 1 : 1
  return fakeIds[modal]
}

export const getEmail = (name: string) =>
  `${name.toLowerCase().replace(" ", ".")}@email.com`
