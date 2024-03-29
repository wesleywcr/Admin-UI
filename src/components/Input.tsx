import { ComponentProps } from 'react'
interface InputRootProps extends ComponentProps<'div'> {}
interface InputPrefixProps extends ComponentProps<'div'> {}
interface InputControlProps extends ComponentProps<'input'> {}

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}
export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-o bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}
export function Root(props: InputRootProps) {
  return (
    <div
      className="flex  w-full items-center rounded-lg gap-2 border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
