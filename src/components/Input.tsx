import { TargetedEvent } from 'preact/compat'
import DBStore from 'stores/DBStore'

function filterDB(searchName: string) {
  DBStore.filtered = DBStore.database.protocols.filter(({ name }) =>
    name.startsWith(searchName)
  )
}

export default function Input() {
  const onChange = (event: TargetedEvent<HTMLInputElement>) => {
    const value = event?.currentTarget?.value
    filterDB(value)
  }

  return (
    <span className="relative">
      <input
        className="cursor-pointer w-176 h-14 py-3 px-5 pl-14 rounded-2xl text-lg focus-visible:outline-0"
        type="text"
        // todo: do by js, because safari on IOS doesn't support authofocus
        autofocus
        onChange={onChange}
        placeholder="  Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute top-1/2 left-5 -translate-y-1/2 w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </span>
  )
}
