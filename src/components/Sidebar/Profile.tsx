import { LogOut } from 'lucide-react'
import { Button } from '../Button'

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
      <div className="flex flex-col truncate ">
        <span className="text-sm font-semibold text-zinc-700">Wesley</span>
        <span className="truncate text-sm text-zinc-500">wesley@gmail.com</span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 rounded-md text-zinc-500 hover:bg-zinc-500" />
      </Button>
    </div>
  )
}
