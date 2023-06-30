import { useSnapshot } from 'valtio'
import DBStore from 'stores/DBStore'
import List from 'components/resultsBox/List'
import NotFound from 'components/resultsBox/NotFound'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  flexDirection,
  gap,
  margin,
  maxHeight,
  overflow,
  padding,
  position,
  width,
} from 'classnames/tailwind'

const container = classnames(
  position('relative'),
  display('flex'),
  flexDirection('flex-col'),
  width('w-176'),
  maxHeight('max-h-98'),
  backgroundColor('bg-white-100'),
  borderRadius('rounded-2xl'),
  margin('m-2'),
  gap('gap-4'),
  alignItems('items-center'),
  overflow('overflow-hidden'),
  padding('p-6')
)

export default function ResultsBox() {
  const { filtered } = useSnapshot(DBStore)

  return (
    <div className={container}>
      {filtered.length ? <List list={filtered} /> : <NotFound />}
    </div>
  )
}
