import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface InputRootProps extends ComponentProps<'div'> {}
interface InputPrefixProps extends ComponentProps<'div'> {}
interface InputControlProps extends ComponentProps<'input'> {}
export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}
export function Control(props: InputControlProps) {
  return (
    <input
      className="border-o flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}
export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex  w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:right-4 focus-within:border-violet-300 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}
