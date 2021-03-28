export interface ICharter {
  id: string
  name: string
  gender: string
  image: string
  status: string
  created: string
  species: string
  location: ILocation
  url: string
  episode: string[]
}

interface ILocation {
  name: string
  url: string
}
