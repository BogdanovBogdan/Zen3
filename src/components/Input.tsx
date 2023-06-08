import { TargetedEvent } from 'preact/compat'

export default function Input() {
  const onInput = (event: TargetedEvent<HTMLInputElement>) => {
  }

  return (
    <input
      className="border-2 cursor-pointer w-96"
      type="text"
      // todo: do by js, because safari on IOS doesn't support authofocus
      autofocus
      onInput={onInput}
    />
  )
}
