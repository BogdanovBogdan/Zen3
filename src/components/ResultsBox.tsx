import classnames, {
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  height,
  padding,
} from 'classnames/tailwind'

const listItem = classnames(
  display('flex'),
  alignItems('items-center'),
  height('h-12'),
  padding('px-3', 'py-2'),
  borderRadius('rounded-2xl'),
  backgroundColor('hover:bg-slate-100')
)

export default function ResultsBox() {
  return (
    <div className="w-96 bg-white m-2 rounded-2xl p-6">
      <ul>
        <li className={listItem}>portal1</li>
        <li className={listItem}>portal2</li>
        <li className={listItem}>portal3</li>
        <li className={listItem}>portal4</li>
        <li className={listItem}>portal5</li>
      </ul>
    </div>
  )
}
