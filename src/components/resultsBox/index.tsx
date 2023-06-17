import { useSnapshot } from 'valtio'
import DBStore from 'stores/DBStore'
import List from 'components/resultsBox/List'

export default function ResultsBox() {
  const { filtered } = useSnapshot(DBStore)

  return (
    <div className="w-176 bg-white m-2 rounded-2xl p-6">
      {filtered.length ? <List list={filtered} /> : 'not found'}
    </div>
  )
}
