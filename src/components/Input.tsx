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
      className="flex-1 border-o bg-transparent p-0 outline-none text-zinc-900 placeholder-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}
export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex  w-full items-center rounded-lg gap-2 border border-zinc-300 px-3 py-2 shadow-sm',
        'focus-within:border-violet-300 focus-within:right-4 focus-within:ring-violet-100',
        'dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
        props.className,
      )}
      {...props}
    />
  )
}
