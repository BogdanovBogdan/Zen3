import { TargetedEvent, useRef, useState } from 'preact/compat'
import { filterDB } from 'stores/DBStore'
import classnames, {
  borderRadius,
  cursor,
  fontSize,
  height,
  outlineWidth,
  padding,
  width,
} from 'classnames/tailwind'

const input = classnames(
  cursor('cursor-pointer'),
  width('w-176'),
  height('h-14'),
  padding('py-3', 'px-14'),
  borderRadius('rounded-2xl'),
  fontSize('text-lg'),
  outlineWidth('focus-visible:outline-0')
)

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  const onChange = (event: TargetedEvent<HTMLInputElement>) => {
    const value = event?.currentTarget?.value
    filterDB(value)
    setValue(value)
  }

  const onReset = () => {
    setValue('')
    filterDB('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <span className="relative">
      <input
        className={input}
        ref={inputRef}
        type="text"
        // todo: do by js, because safari on IOS doesn't support authofocus
        autofocus
        onChange={onChange}
        placeholder="  Search"
        value={value}
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
      <button
        type="button"
        className="absolute top-1/2 right-5 -translate-y-1/2"
        onClick={onReset}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-5 h-5 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </span>
  )
}
