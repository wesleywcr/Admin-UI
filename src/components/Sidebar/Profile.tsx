import { LogOut } from 'lucide-react'

// interface ProfileProps {
//   title: string
// }
export function Profile() {
  return (
    <div className="grid  grid-cols-profile items-center gap-3">
      <img
        src="https://github.com.wesleywcr.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex truncate flex-col ">
        <span className="text-sm font-semibold text-zinc-700">Wesley</span>
        <span className="text-sm text-zinc-500 truncate">wesley@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2">
        <LogOut className="w-5 h-5 text-zinc-500 hover:bg-zinc-500 rounded-md" />
      </button>
    </div>
  )
}
