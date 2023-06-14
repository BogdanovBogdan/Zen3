import { proxy } from 'valtio'
import database from 'data/protocols2.json'

const popularDappsNames = [
  'Uniswap V3',
  'Stargate',
  'WOOFi Swap',
  '1inch Network',
]

const popularDapps = database.protocols.filter(({ name }) =>
  popularDappsNames.includes(name)
)

const dbStore = proxy({
  database,
  filtered: popularDapps,
})

export default proxy(dbStore)
