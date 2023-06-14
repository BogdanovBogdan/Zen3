import { useSnapshot } from 'valtio'
import DBStore from 'stores/DBStore'
import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  gap,
  gridAutoFlow,
  height,
  justifyContent,
  padding,
  width,
} from 'classnames/tailwind'

const listItem = classnames(
  display('grid'),
  gridAutoFlow('grid-flow-col'),
  gap('gap-3'),
  alignItems('items-center'),
  justifyContent('justify-start'),
  height('h-12'),
  padding('px-3', 'py-2'),
  borderRadius('rounded-2xl'),
  backgroundColor('hover:bg-slate-100')
)

const listImg = classnames(
  height('h-8'),
  width('w-8'),
  borderRadius('rounded-full')
)

export default function ResultsBox() {
  const snap = useSnapshot(DBStore)

  return (
    <div className="w-176 bg-white m-2 rounded-2xl p-6">
      <ul>
        {snap.filtered.map((protocol) => (
          <li className={listItem}>
            <img className={listImg} src={protocol.logo} alt={protocol.name} />
            <a href={protocol.url}>{protocol.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
