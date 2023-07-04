import { Protocol } from 'types'
import { labelType, labels } from 'models/ResultLabels'
import { proxy } from 'valtio'
import database from 'data/protocols2.json'

interface State {
  database: { protocols: Protocol[] }
  filtered: Protocol[]
  label: labelType
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
  label: labels.popular,
})

export const filterDB = (searchableName: string) => {
  if (searchableName?.length) {
    state.filtered = state.database.protocols.filter(({ name }) =>
      name.toLowerCase().startsWith(searchableName.toLowerCase())
    )
    state.label = labels.results
  } else {
    state.filtered = popularDapps
    state.label = labels.popular
  }
}

export default state
