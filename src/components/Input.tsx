import { TargetedEvent, useEffect, useRef, useState } from 'preact/compat'
import { filterDB } from 'stores/DBStore'
import classnames, {
  borderRadius,
  cursor,
  fontSize,
  height,
  inset,
  outlineWidth,
  padding,
  peer,
  position,
  translate,
  visibility,
  width,
} from 'classnames/tailwind'

const resetButton = classnames(
  position('absolute'),
  translate('-translate-y-1/2'),
  inset('top-1/2', 'right-5'),
  visibility('invisible', 'peer-[.is-filled]:visible')
)

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  const cnInput = classnames(
    cursor('cursor-pointer'),
    width('w-176'),
    height('h-14'),
    padding('py-3', 'px-14'),
    borderRadius('rounded-2xl'),
    fontSize('text-lg'),
    outlineWidth('focus-visible:outline-0'),
    peer('peer'),
    {
      ['is-filled']: inputRef?.current?.value,
    }
  )

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
        className={cnInput}
        ref={inputRef}
        type="text"
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
      <button type="button" className={resetButton} onClick={onReset}>
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
