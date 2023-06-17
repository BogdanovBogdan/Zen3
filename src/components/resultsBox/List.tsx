import { Protocol } from 'types'
import classnames, {
  TTailwindString,
  alignItems,
  backgroundColor,
  borderRadius,
  display,
  fontSize,
  gap,
  gridAutoFlow,
  gridColumn,
  height,
  overflow,
  padding,
  position,
  whitespace,
  width,
} from 'classnames/tailwind'

type List = {
  list: Protocol[]
}

const listItem = classnames(
  position('relative'),
  display('grid'),
  gridAutoFlow('grid-flow-col'),
  gap('gap-3'),
  alignItems('items-center'),
  height('h-12'),
  padding('px-3', 'py-2'),
  borderRadius('rounded-2xl'),
  backgroundColor('hover:bg-slate-100'),
  width('w-full'),
  gridColumn('grid-cols-[32px_minmax(50%,_1fr)_auto]' as TTailwindString)
)

const listImg = classnames(
  height('h-8'),
  width('w-8'),
  borderRadius('rounded-full')
)

const meta = classnames(
  display('flex'),
  alignItems('items-center'),
  padding('px-3', 'py-1'),
  backgroundColor('bg-white'),
  borderRadius('rounded-full'),
  width('w-full'),
  gap('gap-2'),
  whitespace('whitespace-nowrap'),
  overflow('overflow-hidden')
)

const url = classnames(
  position('absolute'),
  width('w-full'),
  height('h-full'),
  fontSize('text-0'),
  overflow('overflow-hidden')
)

export default function List({ list }: List) {
  return (
    <ul className="w-full">
      {list.map((protocol) => (
        <li className={listItem}>
          <img className={listImg} src={protocol.logo} alt={protocol.name} />
          <span className="overflow-hidden whitespace-nowrap text-ellipsis">
            {protocol.name}
          </span>
          <a href={protocol.url} className={url}>
            link to protocol
          </a>
          <span className={meta}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-5 h-5 min-w-[20px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <span className="overflow-hidden overflow-ellipsis">
              {protocol.url.split('://')[1]}
            </span>
          </span>
        </li>
      ))}
    </ul>
  )
}
