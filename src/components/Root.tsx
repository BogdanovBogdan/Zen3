import {
  alignItems,
  classnames,
  container,
  display,
  flexDirection,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  display('flex'),
  alignItems('items-center'),
  flexDirection('flex-col'),
  container('container'),
  margin('mx-auto'),
  padding('pt-[25%]', 'pb-10', 'py-4'),
  maxWidth('max-w-4xl')
)
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
