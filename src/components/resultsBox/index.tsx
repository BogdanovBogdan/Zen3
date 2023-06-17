import { useSnapshot } from 'valtio'
import DBStore from 'stores/DBStore'
import List from 'components/resultsBox/List'
import NotFound from 'components/resultsBox/NotFound'

export default function ResultsBox() {
  const { filtered } = useSnapshot(DBStore)

  return (
    <div className="w-176 bg-white m-2 rounded-2xl p-6 relative flex flex-col gap-4 items-center">
      {filtered.length ? <List list={filtered} /> : <NotFound />}
    </div>
  )
}
