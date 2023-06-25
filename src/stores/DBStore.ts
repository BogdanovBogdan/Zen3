import { Protocol } from 'types'
import { proxy } from 'valtio'
import database from 'data/protocols2.json'

interface State {
  database: { protocols: Protocol[] }
  filtered: Protocol[]
}

const popularDappsNames = [
  'Uniswap V3',
  'Stargate',
  'WOOFi Swap',
  '1inch Network',
  'SushiSwap',
]

const popularDapps = database.protocols.filter(({ name }) =>
  popularDappsNames.includes(name)
)

const state = proxy<State>({
  database,
  filtered: popularDapps,
})

export const filterDB = (searchableName: string) => {
  if (searchableName?.length) {
    state.filtered = state.database.protocols.filter(({ name }) =>
      name.toLowerCase().startsWith(searchableName.toLowerCase())
    )
  } else {
    state.filtered = popularDapps
  }
}

export default state
